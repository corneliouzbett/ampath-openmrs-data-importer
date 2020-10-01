import transferPatientToAmrs from "./patients/copy-over-patient";

const readCSV = require('./read-csv');
const patientIdsPath = 'metadata/patient_ids.csv'

console.log("Starting application..");

async function start() {
  const patientIds = await readCSV(patientIdsPath);
  const patients = patientIds.array.map((p: any) => p.patient_id);
 
  for (const patient of patients) {
    console.log("=======start===========");
    await transferPatientToAmrs(patient);
    console.log("========end==========");
  }
}

start();
