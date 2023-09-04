const clients = [{ "id": 1, "name": "Karoly Lodford", "email": "klodford0@cnet.com", "job": "Payment Adjustment Coordinator" },
    { "id": 2, "name": "Othelia Gwyther", "email": "ogwyther1@newsvine.com", "job": "Account Coordinator" },
    { "id": 3, "name": "Bordy Saxelby", "email": "bsaxelby2@walmart.com", "job": "Nuclear Power Engineer" },
    { "id": 4, "name": "Cointon Loadman", "email": "cloadman3@spotify.com", "job": "VP Accounting" },
    { "id": 5, "name": "Venita Caldecutt", "email": "vcaldecutt4@live.com", "job": "Database Administrator I" },
    { "id": 6, "name": "Ninnetta Broomer", "email": "nbroomer5@comsenz.com", "job": "Web Developer IV" },
    { "id": 7, "name": "Rafaela Jessard", "email": "rjessard6@ox.ac.uk", "job": "Marketing Assistant" },
    { "id": 8, "name": "Florie Mager", "email": "fmager7@w3.org", "job": "Budget/Accounting Analyst II" },
    { "id": 9, "name": "Urbano Sheward", "email": "usheward8@diigo.com", "job": "Research Assistant II" },
    { "id": 10, "name": "Mark Matfield", "email": "mmatfield9@dyndns.org", "job": "VP Sales" },
    { "id": 11, "name": "Kissiah Kinney", "email": "kkinneya@jigsy.com", "job": "VP Quality Control" },
    { "id": 12, "name": "Dominica Cropp", "email": "dcroppb@gizmodo.com", "job": "Data Coordiator" },
    { "id": 13, "name": "Stillman Lande", "email": "slandec@gizmodo.com", "job": "Human Resources Manager" },
    { "id": 14, "name": "Aridatha Vokes", "email": "avokesd@washington.edu", "job": "VP Accounting" },
    { "id": 15, "name": "Misti Podmore", "email": "mpodmoree@jimdo.com", "job": "Clinical Specialist" },
    { "id": 16, "name": "Waneta Czaple", "email": "wczaplef@hao123.com", "job": "GIS Technical Architect" },
    { "id": 17, "name": "Dominick Julian", "email": "djuliang@deviantart.com", "job": "Actuary" },
    { "id": 18, "name": "Kurt Goggins", "email": "kgogginsh@hexun.com", "job": "Actuary" },
    { "id": 19, "name": "Rosene Glyn", "email": "rglyni@typepad.com", "job": "Librarian" },
    { "id": 20, "name": "Ashely Gillbe", "email": "agillbej@sourceforge.net", "job": "Product Engineer" }]

const fetchClients = () => {

    return clients;
};

const getClient = (id) => {
    return clients.at(id);
};

export {fetchClients, getClient};
