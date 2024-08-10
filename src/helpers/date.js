const calculateAge = (date) => {
	const ageDifMs = Date.now() - date.getTime();
	const ageDate = new Date(ageDifMs);
	return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const getYearsSince = (date) => {
	const diffMs = Date.now() - date.getTime();
	return Math.floor(diffMs / (1000 * 60 * 60 * 24 * 365));
};

export {
  calculateAge,
  getYearsSince
}
