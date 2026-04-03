
const add = (a, b) => a + b;
const mul = (c,d) => c * d;
const div = (e,f)=> e/f;
const sub = (g,h)=> g-h;

console.log(mul(20,50));
console.log(sub(50,50));

console.log(add(50,50,));
console.log(div(100,20));















const api_path = "../API_dashboard/version1.0";
var gl_admin_name = "Admin";
            var admin_token = "1235679";
            var admin_state_id = "40";

// 📌 Helper function (POST API)
const postData = async (url = "", data = {}) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) throw new Error("Network response failed");

        return await response.json();
    } catch (error) {
        console.error("API Error:", error);
        alert("Something went wrong!");
    }
};

// 📌 Load Table Data
const loadScheduleLogs = async () => {
    const tableBody = document.getElementById("problam_table");

    const res = await postData(`${api_path}/admin/logReports.php`, {
        type: "schedule_log"
    });

    if (!res || !res.data) {
        tableBody.innerHTML = `<tr><td colspan="6">No data found</td></tr>`;
        return;
    }

    let rows = "";

    res.data.forEach(item => {
        rows += `
        <tr>
            <td>${item.name}</td>
            <td>
                <button class="editSales btn btn-link"
                    data-token="${item.sales_rep_token}"
                    data-date="${item.date}">
                    View
                </button>
            </td>
            <td>
                ${item.region_token ? `
                <button class="newSales btn btn-link"
                    data-token="${item.sales_rep_token}"
                    data-date="${item.date}">
                    View
                </button>` : "-"}
            </td>
            <td>${item.created_by}</td>
            <td>${item.date_time}</td>
            <td>${item.status}</td>
        </tr>`;
    });

    tableBody.innerHTML = rows;
};

// 📌 Load OLD DATA
const loadOldData = async (token, date) => {
    const res = await postData(`${api_path}/admin/logReports.php`, {
        salesReoToken: token,
        date: date,
        type: "scheduleold_data"
    });

    if (!res) return;

    document.getElementById("edit_state_name").value = res.data.state_name;
    document.getElementById("edit_region_name").value = res.data.region_name;

    // Area
    document.getElementById("edit_rep_area").innerHTML =
        Object.values(res.datas).map(v => `<li>${v}</li>`).join("");

    // Distributor
    document.getElementById("edit_area_distributor").innerHTML =
        Object.values(res.dataas).map(v => `<li>${v}</li>`).join("");
};

// 📌 Load NEW DATA
const loadNewData = async (token, date) => {
    const res = await postData(`${api_path}/admin/logReports.php`, {
        salesReoToken: token,
        date: date,
        type: "schedulenew_data"
    });

    if (!res) return;

    document.getElementById("state_name").value = res.data.state_name;
    document.getElementById("region_name").value = res.data.region_name;

    document.getElementById("rep_area").innerHTML =
        Object.values(res.datas).map(v => `<li>${v}</li>`).join("");

    document.getElementById("area_distributor").innerHTML =
        Object.values(res.dataas).map(v => `<li>${v}</li>`).join("");
};

// 📌 Event Delegation (Click Handling)
document.addEventListener("click", (e) => {
    const oldBtn = e.target.closest(".editSales");
    const newBtn = e.target.closest(".newSales");

    if (oldBtn) {
        const token = oldBtn.dataset.token;
        const date = oldBtn.dataset.date;
        loadOldData(token, date);
        $("#oldmod").modal("show"); // Bootstrap modal
    }

    if (newBtn) {
        const token = newBtn.dataset.token;
        const date = newBtn.dataset.date;
        loadNewData(token, date);
        $("#newmod").modal("show");
    }
});

// 🚀 Init
document.addEventListener("DOMContentLoaded", () => {
    loadScheduleLogs();
});
















