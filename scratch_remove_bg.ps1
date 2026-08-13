Add-Type -AssemblyName System.Drawing
$inputPath = "c:\Users\yuvan\OneDrive\Desktop\KATENGERS\katengers logo.png"
$outputPath = "c:\Users\yuvan\OneDrive\Desktop\KATENGERS\public\logo.png"

$bmp = New-Object System.Drawing.Bitmap($inputPath)

# Loop over pixels near white (R>240, G>240, B>240) to handle subtle compression anti-aliasing near edges
for ($x = 0; $x -lt $bmp.Width; $x++) {
    for ($y = 0; $y -lt $bmp.Height; $y++) {
        $pixel = $bmp.GetPixel($x, $y)
        if ($pixel.R -gt 235 -and $pixel.G -gt 235 -and $pixel.B -gt 235) {
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::Transparent)
        }
    }
}

$bmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Host "Transparent logo saved to public/logo.png"
