describe("User Route Feature Tests", function () {

	beforeEach(function () {
		cy.visit("http://localhost:8080");
	});

	describe("User MVP Features", function () {

		it("Login Link is displayed", function () {
			cy.get("#menu_div").should("contain", "Log In");
		});
        
		it("SignUp is displayed", function () {
			cy.get("#menu_div").should("contain", "Sign Up");
		});
	});

	describe("User Core Features", function () {

		it("Logout does not display when !logged in", function() {

		});

		it("Db-added user can login, Log out displays", function() {

		});


		it("User can logout when Logged in", function() {

		});

		it("User can sign up and login", function() {

		});

		it("User can set profile pic", function() {

		});

		describe("User Account Editing", function() {

			it("User can change account password", function() {

			});

			it("User can change account email", function() {

			});

			it("User can change profile pic", function() {

			});
		});

	});

	describe("User Stretch Features", function () {

		it("User profile page link displays when logged in", function() {

		});

		// all test for both edit AND display on '/profile' page

		describe("User profile editing", function() {

			it("User can write a bio", function() {

			});
			
			it("User can set age", function() {

			});

			it("User can set location", function() {

			});

			it("User can set Education/ Employment", function() {

			});
		});

		it("User can see other user's profile", function() {

		});

		// may move to separate feature

		it("User can follow other user", function() {

		});

		it("User can un follow other user", function() {

		});

		it("User can private msg other user", function() {

		});
	});
});
