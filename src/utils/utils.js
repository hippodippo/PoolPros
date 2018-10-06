// Utility functions for extracting only the companies with the chosen certifications.

export default {
  getSelectedCerts: (certs) => {
    const chosen = certs.filter((el, index, arr) => arr[index].status);

    return chosen;
  },

  checkArrayEquality: (selectedCerts, companyCerts) => {
    if (selectedCerts.length !== companyCerts.length) {
      return false;
    }

    for (let i = 0; i < companyCerts.length; i += 1) {
      if (!selectedCerts.includes(companyCerts[i])) {
        return false;
      }
    }

    return true;
  },

  getSelectedCompanies: (certs, dealers) => {
    const selectedCerts = this.getSelectedCerts(certs); // <-- How to access the getSelectedCerts function ?
    const companies = [];
    let companyCerts;

    for (let i = 0; i < dealers.length; i += 1) {
      companyCerts = dealers[i].data.certifications;

      if (this.checkArrayEquality(selectedCerts, companyCerts)) {
        companies.push(dealers[i]);
      }
    }

    return companies;
  },
};