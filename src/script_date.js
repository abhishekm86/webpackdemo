let getCurrentDate = (function(){
	return function(){
		let current_date = new Date();
		return current_date.getDate() + "/" + (current_date.getMonth() + 1) + "/" + current_date.getFullYear();
	}
})();
module.exports = getCurrentDate;