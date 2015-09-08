app.service('userService',function(){

	var employees = [
            {"id": 1, "firstName": "Lily", "lastName": "Wang", "managerId": 0, "managerName": "", "reports": 3, "title": "CEO", "department": "Corporate", "cellPhone": "617-000-0001", "officePhone": "781-000-0001", "email": "jking@fakemail.com", "city": "Boston, MA", "pic": "1.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org"},
            {"id": 2, "firstName": "Julie", "lastName": "Chen", "managerId": 1, "managerName": "Lily Wang", "reports": 3, "title": "VP", "department": "Marketing", "cellPhone": "617-000-0002", "officePhone": "781-000-0002", "email": "jtaylor@fakemail.com", "city": "Boston, MA", "pic": "2.jpg", "twitterId": "@fakejtaylor", "blog": "http://coenraets.org"},
            {"id": 3, "firstName": "Tommy", "lastName": "Li", "managerId": 2, "managerName": "Julie Chen", "reports": 0, "title": "CFO", "department": "Accounting", "cellPhone": "617-000-0003", "officePhone": "781-000-0003", "email": "elee@fakemail.com", "city": "Boston, MA", "pic": "3.jpg", "twitterId": "@fakeelee", "blog": "http://coenraets.org"},
            {"id": 4, "firstName": "Peter", "lastName": "Sang", "managerId": 1, "managerName": "Lily Wang", "reports": 3, "title": "Engineering Manager", "department": "Engineering", "cellPhone": "617-000-0004", "officePhone": "781-000-0004", "email": "jwilliams@fakemail.com", "city": "Boston, MA", "pic": "4.jpg", "twitterId": "@fakejwilliams", "blog": "http://coenraets.org"},
            {"id": 5, "firstName": "Alice", "lastName": "Wu", "managerId": 1, "managerName": "Lily Wang", "reports": 2, "title": "VP", "department": "Sales", "cellPhone": "617-000-0005", "officePhone": "781-000-0005", "email": "rmoore@fakemail.com", "city": "Boston, MA", "pic": "5.jpg", "twitterId": "@fakermoore", "blog": "http://coenraets.org"},
            {"id": 6, "firstName": "Ren", "lastName": "He", "managerId": 4, "managerName": "Peter Sang", "reports": 0, "title": "QA Manager", "department": "Engineering", "cellPhone": "617-000-0006", "officePhone": "781-000-0006", "email": "pjones@fakemail.com", "city": "Boston, MA", "pic": "6.jpg", "twitterId": "@fakepjones", "blog": "http://coenraets.org"},
            {"id": 7, "firstName": "Di", "lastName": "An", "managerId": 4, "managerName": "Peter Sang", "reports": 0, "title": "Software Manager", "department": "Engineering", "cellPhone": "617-000-0007", "officePhone": "781-000-0007", "email": "pgates@fakemail.com", "city": "Boston, MA", "pic": "7.jpg", "twitterId": "@fakepgates", "blog": "http://coenraets.org"},
            {"id": 8, "firstName": "Peiwei", "lastName": "Mi", "managerId": 2, "managerName": "Julie Chen", "reports": 0, "title": "Marketing Manager", "department": "Marketing", "cellPhone": "617-000-0008", "officePhone": "781-000-0008", "email": "lwong@fakemail.com", "city": "Boston, MA", "pic": "8.jpg", "twitterId": "@fakelwong", "blog": "http://coenraets.org"},
            {"id": 9, "firstName": "Jacob", "lastName": "Wei", "managerId": 2, "managerName": "Julie Chen", "reports": 0, "title": "Marketing Representative", "department": "Marketing", "cellPhone": "617-000-0009", "officePhone": "781-000-0009", "email": "gdonovan@fakemail.com", "city": "Boston, MA", "pic": "9.jpg", "twitterId": "@fakegdonovan", "blog": "http://coenraets.org"},
            {"id": 10, "firstName": "Amy", "lastName": "Zhang", "managerId": 5, "managerName": "Alice Wu", "reports": 0, "title": "Sales Manager", "department": "Sales", "cellPhone": "617-000-0010", "officePhone": "781-000-0010", "email": "kbyrne@fakemail.com", "city": "Boston, MA", "pic": "10.jpg", "twitterId": "@fakekbyrne", "blog": "http://coenraets.org"},
            {"id": 11, "firstName": "Jie", "lastName": "Jiang", "managerId": 5, "managerName": "Alice Wu", "reports": 0, "title": "Sales Representative", "department": "Sales", "cellPhone": "617-000-0011", "officePhone": "781-000-0011", "email": "ajones@fakemail.com", "city": "Boston, MA", "pic": "11.jpg", "twitterId": "@fakeajones", "blog": "http://coenraets.org"},
            {"id": 12, "firstName": "Jerry", "lastName": "Chu", "managerId": 4, "managerName": "Peter Sang", "reports": 0, "title": "Software Architect", "department": "Engineering", "cellPhone": "617-000-0012", "officePhone": "781-000-0012", "email": "swells@fakemail.com", "city": "Boston, MA", "pic": "12.jpg", "twitterId": "@fakeswells", "blog": "http://coenraets.org"}
        ];
		
	this.findReporterById = function(managerId) {
		var reporterId = [];
		var i, id;
		for (i = 0; i < employees.length; i++) {
			if (employees[i].managerId == managerId) {
				id = i + 1;
				reporterId.push(employees[i]);
			};
		};
		return reporterId;
	}
	
		
	// this.add = function (newuser){
		// user.push(newuser);
	// }
	
	// this.userLen = function (){
		// return user.length;
	// }
	
	this.getUser = function(id){
		return employees[id-1];
	}

	// this.save = function (changeduser) {
		// user[changeduser.id-1]=changeduser;
    // }
 
    // this.delete = function (id) {
        // for (i in user) {
            // if (user[i].id == id) {
                // user.splice(i, 1);
            // }
        // }
		// if(id!=user.length){
			// var i;
			// for(i=id-1;i<user.length;i++){
				// user[i].id = user[i].id -1;
			// }
		// }
    // }

    //simply returns the contacts list
    this.list = function () {
        return employees;
    }
});