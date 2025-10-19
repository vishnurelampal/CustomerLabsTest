import { DropDownOptions } from "../Constants";
const obj = {
  first_name: "First name",
  last_name: "Last name",
  gender: "Gender",
  age: "Age",
  account_name: "Account name",
  city: "City",
  state: "State",
};

function FormatApi(schemaName, ScehemaArray) {
  console.log("saved");
  if (schemaName !== "" && ScehemaArray.length > 0) {
    console.log("came inside");
    const formatted = ScehemaArray.map((item) => {
      return item.selectedVal;
    });
    let arrayApi = {};
    for (var i = 0; i < formatted.length; i++) {
      arrayApi[formatted[i]] = obj[formatted[i]];
    }
    const mainArray = Object.keys(arrayApi).map((key) => ({
      [key]: arrayApi[key],
    }));

    const finalFormaated = {};
    finalFormaated["segment_name"] = schemaName.split(" ").join("_");
    finalFormaated["scehma"] = mainArray;
    return finalFormaated;
  }
}
export { FormatApi };
