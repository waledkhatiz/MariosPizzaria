let entireTable = document.querySelector('table');

entireTable.innerHTML = `
        <tr>
            <th>Booking ID: </th> 
            <td>000000001 <span>This is hard coded. No backend ¯\\_(ツ)_/¯</span></td>
        </tr>
        <tr>
            <th>Booking Details</th>
            <td>${sessionStorage.getItem("customer-name")}<br/>
                ${sessionStorage.getItem("guest-num")} guests<br/><br/>
                Expected arrival at ${sessionStorage.getItem("date-time")}
            </td>
        </tr>
        <tr>
            <th>Location</th>
            <td>123 Spring St,<br/>
                East Melbourne VIC 3002</td>
        </tr>
`;




