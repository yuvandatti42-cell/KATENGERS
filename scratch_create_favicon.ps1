Add-Type -AssemblyName System.Drawing
$inputPath = "c:\Users\yuvan\OneDrive\Desktop\KATENGERS\katengers logo.png"
$outputPath = "c:\Users\yuvan\OneDrive\Desktop\KATENGERS\public\favicon.png"

$bmp = New-Object System.Drawing.Bitmap($inputPath)

$minX = $bmp.Width
$minY = $bmp.Height
$maxX = 0
$maxY = 0

# Scan for Yellow Mascot Badge pixels (Yellow: R>200, G>150, B<60)
for ($x = 0; $x -lt $bmp.Width; $x++) {
    for ($y = 0; $y -lt $bmp.Height; $y++) {
        $pixel = $bmp.GetPixel($x, $y)
        
        if ($pixel.R -gt 200 -and $pixel.G -gt 150 -and $pixel.B -lt 60) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

# Add small padding around yellow badge
$pad = 10
$minX = [Math]::Max(0, $minX - $pad)
$minY = [Math]::Max(0, $minY - $pad)
$maxX = [Math]::Min($bmp.Width - 1, $maxX + $pad)
$maxY = [Math]::Min($bmp.Height - 1, $maxY + $pad)

$width = $maxX - $minX + 1
$height = $maxY - $minY + 1

Write-Host "Badge Bounding Box: MinX=$minX MinY=$minY Width=$width Height=$height"

$rect = New-Object System.Drawing.Rectangle($minX, $minY, $width, $height)
$badgeBmp = $bmp.Clone($rect, $bmp.PixelFormat)

# Make outer white background transparent
for ($cx = 0; $cx -lt $badgeBmp.Width; $cx++) {
    for ($cy = 0; $cy -lt $badgeBmp.Height; $cy++) {
        $cpixel = $badgeBmp.GetPixel($cx, $cy)
        if ($cpixel.R -gt 235 -and $cpixel.G -gt 235 -and $cpixel.B -gt 235) {
            $badgeBmp.SetPixel($cx, $cy, [System.Drawing.Color]::Transparent)
        }
    }
}

$bmp.Dispose()

$badgeBmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$badgeBmp.Dispose()

Write-Host "Favicon generated successfully at public/favicon.png"
