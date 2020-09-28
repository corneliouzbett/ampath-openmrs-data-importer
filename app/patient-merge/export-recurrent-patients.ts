const createCSVWriter = require('csv-writer').createObjectCsvWriter;

export default async function exportRecurrentPatients(data: Array<any>) {
    const csvWriter = createCSVWriter({
        path: './metadata/possible-existing-patients.csv',
        header: [
            {id: 'Kenya_emr_personId', title: 'KenyaEMR personID'},
            {id: 'Kenya_emr_identifiers', title: 'KenyaEMR identifiers'},
            {id: 'Kenya_emr_names', title: 'KenyaEMR names'},
            {id: 'Amrs_person_uuid', title: 'AMRS person uuid'},
            {id: 'Amrs_identifiers', title: 'AMRS identifiers'},
            {id: 'Amrs_names', title: 'AMRS names'}
        ]
    });
    csvWriter.writeRecords(data)
    .then(() => console.log('Data was written to csv file successfully'));
}