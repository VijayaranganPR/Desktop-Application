/*
options Object
    certificate string - Path for the pkcs12 file.
    password string - Passphrase for the certificate.
callback Function
    result Integer - Result of import.
Imports the certificate in pkcs12 format into the platform certificate store. 
callback is called with the result of import operation, a value of 0 indicates success while any other value indicates failure according to Chromium net_error_list.
*/

