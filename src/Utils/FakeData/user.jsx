class User {
    userName = "";
    password = "";
    email = "";
    phone = "";
    address = "";
    avatar = "";
    role = "";
    listMovieWatched = [];

    constructor(userName, password, email, phone, address, avatar, role, listMovieWatched) {
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.avatar = avatar;
        this.role = role;
        this.listMovieWatched = listMovieWatched;
    }
}
