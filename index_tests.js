QUnit.test("balloons", function(assert) {
	var order = ("4 sets of red, 3 sets of blue, and 3 sets of yellow.");
		assert.deepEqual(order, ["4 of red", "3 of blue", "3 of yellow."]);
    });

QUnit.test("balloons", function(assert) {
	var prices = balloons(["4,5,5.50"]);
		assert.deepEqual(["R14.50"], prices);
    });

// QUnit.test("balloons", function(assert) {
// 	var order = ("4 sets of red, 3 sets of blue, and 3 sets of yellow.");
// 		assert.deepEqual(order, ["4 of red", "3 of blue", "3 of yellow."]);
//     });

// QUnit.test("balloons", function(assert) {
// 	var order = ("4 sets of red, 3 sets of blue, and 3 sets of yellow.");
// 		assert.deepEqual(order, ["4 of red", "3 of blue", "3 of yellow."]);
