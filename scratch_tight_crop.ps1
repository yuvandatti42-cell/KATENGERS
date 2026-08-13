Add-Type -AssemblyName System.Drawing
$inputPath = "c:\Users\yuvan\OneDrive\Desktop\KATENGERS\katengers logo.png"
$outputPath = "c:\Users\yuvan\OneDrive\Desktop\KATENGERS\public\logo.png"

$bmp = New-Object System.Drawing.Bitmap($inputPath)

$minX = $bmp.Width
$minY = $bmp.Height
$maxX = 0
$maxY = 0

# Scan for logo artwork pixels (Yellow circle, Black cat, Orange KATENGERS text)
for ($x = 0; $x -lt $bmp.Width; $x++) {
    for ($y = 0; $y -lt $bmp.Height; $y++) {
        $pixel = $bmp.GetPixel($x, $y)
        
        # Check if NOT background white/light-gray (i.e. artwork content)
        if ($pixel.R -lt 240 -or $pixel.G -lt 240 -or $pixel.B -lt 240) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

Write-Host "Tight Bounding Box: MinX=$minX MinY=$minY MaxX=$maxX MaxY=$maxY"

$width = $maxX - $minX + 1
$height = $maxY - $minY + 1

Write-Host "Cropped dimensions: Width=$width Height=$height"

# Create new cropped bitmap
$rect = New-Object System.Drawing.Rectangle($minX, $minY, $width, $height)
$croppedBmp = $bmp.Clone($rect, $bmp.PixelFormat)

# Make white pixels transparent on the cropped bitmap
for ($cx = 0; $cx -lt $croppedBmp.Width; $cx++) {
    for ($cy = 0; $cy -lt $croppedBmp.Height; $cy++) {
        $cpixel = $croppedBmp.GetPixel($cx, $cy)
        if ($cpixel.R -gt 230 -and $cpixel.G -gt 230 -and $cpixel.B -gt 230) {
            $croppedBmp.SetPixel($cx, $cy, [System.Drawing.Color]::Transparent)
        }
    }
}

$bmp.Dispose()

$tempPath = "c:\Users\yuvan\OneDrive\Desktop\KATENGERS\public\logo_tight.png"
$croppedBmp.Save($tempPath, [System.Drawing.Imaging.ImageFormat]::Png)
$croppedBmp.Dispose()

Copy-Item -Path $tempPath -Destination $outputPath -Force
Remove-Item -Path $tempPath -Force

Write-Host "Tight cropped transparent logo saved successfully to public/logo.png."
