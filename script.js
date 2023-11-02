document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("booking-form");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const mobno = document.getElementById("mobno").value;
        const from = document.getElementById("from").value;
        const to = document.getElementById("to").value;
        const passan = document.getElementById("passan").value;
        const date = document.getElementById("date").value;

        const bookingData = {
            name,
            mobno,
            from,
            to,
            passan,
            date
        };

        const resultPage = window.open("", "_blank");

        const resultHTML = `
            <html>
            <head>
                <title>Flight Booking Result</title>
            </head>
            <body>
                <h1>Booking Details</h1>
                <p><strong>Name :</strong> ${name}</p>
                <p><strong>Mobno :</strong> ${mobno}</p>
                <p><strong>From :</strong> ${from}</p>
                <p><strong>To :</strong> ${to}</p>
                <p><strong>Passan :</strong> ${passan}</p>
                <p><strong>Date :</strong> ${date}</p>
            </body>
            </html>
        `;

        resultPage.document.open();
        resultPage.document.write(resultHTML);
        resultPage.document.close();
    });
});
