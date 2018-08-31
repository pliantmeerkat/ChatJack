describe("Post Route Feature Tests", function () {
    
	beforeEach(function () {
		cy.visit("http://localhost:8080");
	});

	describe("MVP Post Features", function () {

		it("Has a page for posts", function () {
			cy.get("#posts-title").should("contain", "Posts");
		});

		it("Has a submit posts link", function () {
			cy.get("#posts-new").should("contain", "New Post");
		});

		it("Displays a pre-set post correctly", function () {
			cy.get("#posts-list").should("contain", "Test Comment");
		});

		it("Displays images correectly", function () {

		});

		// below tests will be commented out following user authentication

		it("User can post a text only comment and see it displayed", function () {

		});

		it("User can post a image within comment and see it displayed", function () {

		});
	});

	describe("Core Post Features", function () {

		it("Allows logged in user to post", function () {

		});

		it("allows a logged in user to log out", function () {

		});

		it("Alerts when visit and not logged in", function () {

		});
		it("User can delete a post", function () {

		});
	});

	describe("Stretch Post Features", function () {
		
		it("User can like a post", function () {

		});

		it("User cannot like post twice", function () {

		});

		it("User can comment on post", function () {

		});
		it("User can like a comment", function () {

		});
		it("User can comment a comment", function () {

		});
		it("User can delete comment", function () {

		});
		it("User can flag Posts & Comments", function () {

		});
	});
});
