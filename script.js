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

        // Create a table and populate it with the booking details
        const table = document.createElement("table");
        table.innerHTML = `
            <tr>
                <th>Field</th>
                <th>Value</th>
            </tr>
            <tr>
                <td>Name</td>
                <td>${name}</td>
            </tr>
            <tr>
                <td>Mobile No</td>
                <td>${mobno}</td>
            </tr>
            <tr>
                <td>From City</td>
                <td>${from}</td>
            </tr>
            <tr>
                <td>To City</td>
                <td>${to}</td>
            </tr>
            <tr>
                <td>Passenger</td>
                <td>${passan}</td>
            </tr>
            <tr>
                <td>Departure Date</td>
                <td>${date}</td>
            </tr>
        `;

        // Append the table to the "booking-details" div
        const bookingDetails = document.getElementById("booking-details");
        bookingDetails.innerHTML = "";
        bookingDetails.appendChild(table);
    });
});