let employees = [{ "id": 1, "name": "Darrel", "email": "dhalksworth0@people.com.cn", "gender": "Male" },
{ "id": 2, "name": "Deana", "email": "dpea1@amazon.de", "gender": "Genderfluid" },
{ "id": 3, "name": "Vinny", "email": "vstemp2@flickr.com", "gender": "Female" },
{ "id": 4, "name": "Marie", "email": "mlamputt3@t-online.de", "gender": "Female" },
{ "id": 5, "name": "Vickie", "email": "vorigin4@rakuten.co.jp", "gender": "Female" },
{ "id": 6, "name": "Patric", "email": "pmerrall5@themeforest.net", "gender": "Male" },
{ "id": 7, "name": "Hamnet", "email": "hgiddins6@sfgate.com", "gender": "Male" },
{ "id": 8, "name": "Gates", "email": "ghatzar7@omniture.com", "gender": "Female" },
{ "id": 9, "name": "Ewart", "email": "erizzini8@edublogs.org", "gender": "Male" },
{ "id": 10, "name": "Jerrome", "email": "jvignaux9@nih.gov", "gender": "Male" },
{ "id": 11, "name": "Deny", "email": "djiggena@home.pl", "gender": "Female" },
{ "id": 12, "name": "Jasmine", "email": "jcastellettob@yahoo.com", "gender": "Genderfluid" },
{ "id": 13, "name": "Pembroke", "email": "pbillhamc@army.mil", "gender": "Male" },
{ "id": 14, "name": "Raynard", "email": "rsladed@wikia.com", "gender": "Male" },
{ "id": 15, "name": "Gaylord", "email": "gengalle@tinyurl.com", "gender": "Male" },
{ "id": 16, "name": "Ax", "email": "agodsilf@wisc.edu", "gender": "Male" },
{ "id": 17, "name": "Antonius", "email": "agarrardg@cornell.edu", "gender": "Male" },
{ "id": 18, "name": "Gwynne", "email": "gelbyh@github.io", "gender": "Female" },
{ "id": 19, "name": "Brig", "email": "btaaffei@hubpages.com", "gender": "Male" },
{ "id": 20, "name": "Abbie", "email": "akeymerj@pagesperso-orange.fr", "gender": "Male" }]

let display_employees = () => {
    let rows = ""
    employees.map((employee) => {
        rows = rows + `<tr>
                        <td>${employee.id}</td>
                        <td>${employee.name}</td>
                        <td>${employee.email}</td>
                        <td>${employee.gender}</td>

                       </tr>`
    })
    document.getElementById('tdata').innerHTML = rows
    //document.getElementById('tdata').innerHTML = "GM"
}