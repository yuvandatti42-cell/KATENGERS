Add-Type -AssemblyName System.Drawing
$inputPath = "c:\Users\yuvan\OneDrive\Desktop\KATENGERS\katengers logo.png"
$outputPathPng = "c:\Users\yuvan\OneDrive\Desktop\KATENGERS\public\favicon.png"

$bmp = New-Object System.Drawing.Bitmap($inputPath)

# 1. Locate Yellow Circle Center and Radius
$minX = $bmp.Width
$minY = $bmp.Height
$maxX = 0
$maxY = 0

for ($x = 0; $x -lt $bmp.Width; $x++) {
    for ($y = 0; $y -lt $bmp.Height; $y++) {
        $pixel = $bmp.GetPixel($x, $y)
        # Yellow color check (R > 200, G > 140, B < 80)
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

# Crop tight box around yellow circle
$rect = New-Object System.Drawing.Rectangle($minX, $minY, $width, $height)
$badgeBmp = $bmp.Clone($rect, $bmp.PixelFormat)
$bmp.Dispose()

# Create clean transparent 320x320 bitmap
$canvasSize = [Math]::Max($badgeBmp.Width, $badgeBmp.Height)
$finalBmp = New-Object System.Drawing.Bitmap($canvasSize, $canvasSize, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($finalBmp)
$g.Clear([System.Drawing.Color]::Transparent)

# Draw badge centered
$offsetX = ($canvasSize - $badgeBmp.Width) / 2
$offsetY = ($canvasSize - $badgeBmp.Height) / 2
$g.DrawImage($badgeBmp, $offsetX, $offsetY)
$g.Dispose()
$badgeBmp.Dispose()

# Mask non-badge pixels and white background
$cx = $canvasSize / 2.0
$cy = $canvasSize / 2.0
$radius = ($canvasSize / 2.0) - 2.0

for ($x = 0; $x -lt $canvasSize; $x++) {
    for ($y = 0; $y -lt $canvasSize; $y++) {
        $dist = [Math]::Sqrt([Math]::Pow($x - $cx, 2) + [Math]::Pow($y - $cy, 2))
        $p = $finalBmp.GetPixel($x, $y)
        
        # If outside yellow circle radius OR white background pixel, set transparent
        if ($dist -gt $radius -or ($p.R -gt 220 -and $p.G -gt 220 -and $p.B -gt 220)) {
            $finalBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        }
    }
}

$finalBmp.Save($outputPathPng, [System.Drawing.Imaging.ImageFormat]::Png)
$finalBmp.Dispose()

Write-Host "Perfect 100% transparent circular favicon saved to public/favicon.png"
