function descargarContacto() {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:Mauricio Vallejo GEB
TEL:+57 3006576752
EMAIL: mercado@eurobelleza.com 
NOTE:Sales and Marketing Manager
END:VCARD`;

    const blob = new Blob([vcardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contacto.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
