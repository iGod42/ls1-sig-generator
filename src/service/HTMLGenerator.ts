export class HTMLGenerator {
    static getHtml(innerHtml?: string): string | undefined {
        if (!innerHtml) return innerHtml
        return `
        <html>
        <head>
            <style>
                /* Remove space around the email design. */
                html,
                body {
                    margin: 0 auto !important;
                    padding: 0 !important;
                    height: 100% !important;
                    width: 100% !important;
                }

                /* Stop Outlook resizing small text. */
                * {
                    -ms-text-size-adjust: 100%;
                }

                /* Stop Outlook from adding extra spacing to tables. */
                table,
                td {
                    mso-table-lspace: 0pt !important;
                    mso-table-rspace: 0pt !important;
                }
                /* Use a better rendering method when resizing images in Outlook IE. */
                img {
                    -ms-interpolation-mode:bicubic;
                }

                /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
                a {
                    text-decoration: none;
                }
            </style>
        </head>
        <body>
        ${innerHtml}
        </body>
        </html>
        `
    }
}