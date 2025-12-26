
const fs = require('fs');
const pdf = require('pdf-parse');

const pdfPath = 'KozaProfile.pdf';

const options = {
    pagerender: function (pageData) {
        return pageData.getTextContent()
            .then(function (textContent) {
                let lastY = -1;
                let text = '';
                for (let item of textContent.items) {
                    if (lastY === item.transform[5] || lastY === -1) {
                        text += item.str;
                    } else {
                        text += '\n' + item.str;
                    }
                    lastY = item.transform[5];
                }
                return text;
            });
}

fs.readFile(pdfPath, (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    pdf(data, options).then(function(data) {
        fs.writeFile('publications.txt', data.text, (err) => {
            if (err) {
                console.error(err);
            }
        });
    }).catch(function(error){
        console.error(error);
    });
});
