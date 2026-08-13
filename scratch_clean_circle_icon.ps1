Add-Type -AssemblyName System.Drawing
$inputPath = "c:\Users\yuvan\OneDrive\Desktop\KATENGERS\katengers logo.png"
$outputPath = "c:\Users\yuvan\OneDrive\Desktop\KATENGERS\public\favicon.png"

$bmp = New-Object System.Drawing.Bitmap($inputPath)

$minX = $bmp.Width
$minY = $bmp.Height
$maxX = 0
$maxY = 0

# Scan for Yellow Mascot Badge pixels
for ($x = 0; $x -lt $bmp.Width; $x++) {
    for ($y = 0; $y -lt $bmp.Height; $y++) {
        $pixel = $bmp.GetPixel($x, $y)
        if ($pixel.R -gt 200 -and $pixel.G -gt 140 -and $pixel.B -lt 80) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

$width = $maxX - $minX + 1
$height = $maxY - $minY + 1

$rect = New-Object System.Drawing.Rectangle($minX, $minY, $width, $height)
$badgeBmp = $bmp.Clone($rect, $bmp.PixelFormat)

# Find circle center and radius
$centerX = $badgeBmp.Width / 2.0
$centerY = $badgeBmp.Height / 2.0
$radius = [Math]::Min($centerX, $centerY) - 1.0

# Mask out everything outside the circle radius
for ($cx = 0; $cx -lt $badgeBmp.Width; $cx++) {
    for ($cy = 0; $cy -lt $badgeBmp.Height; $cy++) {
        $dist = [Math]::Sqrt([Math]::Pow($cx - $centerX, 2) + [Math]::Pow($cy - $centerY, 2))
        if ($dist -gt $radius) {
            $badgeBmp.SetPixel($cx, $cy, [System.Drawing.Color]::Transparent)
        }
    }
}

$bmp.Dispose()

$badgeBmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$badgeBmp.Dispose()

Write-Host "Circular mascot icon cleaned and saved to public/favicon.png"
