Add-Type -AssemblyName System.Drawing
$src = "C:\Users\hd066\.gemini\antigravity\brain\tempmediaStorage\media__1780876134757.jpg"
$img = [System.Drawing.Image]::FromFile($src)
$w = [int]($img.Width / 2)
$h = [int]($img.Height / 2)

$rects = @(
    [System.Drawing.Rectangle]::new(0, 0, $w, $h),
    [System.Drawing.Rectangle]::new($w, 0, $w, $h),
    [System.Drawing.Rectangle]::new(0, $h, $w, $h),
    [System.Drawing.Rectangle]::new($w, $h, $w, $h)
)

$outDir = "c:\Users\hd066\OneDrive\Documents\shoes-wale\public\products"
$names = @("puma-softride-volt.jpg", "us-polo-retro.jpg", "puma-mirage-tech.jpg", "puma-navy.jpg")

for ($i=0; $i -lt 4; $i++) {
    $bmp = New-Object System.Drawing.Bitmap $w, $h
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $destRect = [System.Drawing.Rectangle]::new(0, 0, $w, $h)
    $g.DrawImage($img, $destRect, $rects[$i], [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    $outPath = Join-Path $outDir $names[$i]
    $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $bmp.Dispose()
}
$img.Dispose()
Write-Host "Images split successfully!"
