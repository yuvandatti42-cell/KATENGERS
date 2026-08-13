Add-Type -AssemblyName System.Drawing
$inputPath = "c:\Users\yuvan\OneDrive\Desktop\KATENGERS\public\logo.png"
$outputPath = "c:\Users\yuvan\OneDrive\Desktop\KATENGERS\public\logo.png"

$bmp = New-Object System.Drawing.Bitmap($inputPath)

$minX = $bmp.Width
$minY = $bmp.Height
$maxX = 0
$maxY = 0

# Find non-transparent bounding box
for ($x = 0; $x -lt $bmp.Width; $x++) {
    for ($y = 0; $y -lt $bmp.Height; $y++) {
        $pixel = $bmp.GetPixel($x, $y)
        if ($pixel.A -gt 20) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

$width = $maxX - $minX + 1
$height = $maxY - $minY + 1

Write-Host "Bounding box: X=$minX Y=$minY Width=$width Height=$height"

# Crop
$rect = New-Object System.Drawing.Rectangle($minX, $minY, $width, $height)
$croppedBmp = $bmp.Clone($rect, $bmp.PixelFormat)

$bmp.Dispose()

# Save cropped bitmap to temporary file then overwrite
$tempPath = "c:\Users\yuvan\OneDrive\Desktop\KATENGERS\public\logo_cropped.png"
$croppedBmp.Save($tempPath, [System.Drawing.Imaging.ImageFormat]::Png)
$croppedBmp.Dispose()

Copy-Item -Path $tempPath -Destination $outputPath -Force
Remove-Item -Path $tempPath -Force

Write-Host "Cropped transparent logo saved successfully."
