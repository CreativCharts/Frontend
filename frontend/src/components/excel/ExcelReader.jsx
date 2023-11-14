import * as XLSX from "xlsx";

class ExcelReader {
    static async readExcel(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = (event) => {
                const data = event.target.result;
                const workbook = XLSX.read(data, {type: "binary"});
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                const jsonData = XLSX.utils.sheet_to_json(sheet, {header: 1});
                resolve(jsonData);
            };
            reader.onerror = (error) => reject(error);
            reader.readAsBinaryString(file);
        });
    }
}

export default ExcelReader;
