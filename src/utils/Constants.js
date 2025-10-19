const DropDownOptions = [
  { Label: "Add Schema to Segment", Value: "" },
  { Label: "First Name", Value: "first_name" },
  { Label: "Last Name", Value: "last_name" },
  { Label: "Gender", Value: "gender" },
  { Label: "Age", Value: "age" },
  { Label: "Account Name", Value: "account_name" },
  { Label: "City", Value: "city" },
  { Label: "State", Value: "state" },
];
const uniqueApi = "https://webhook.site/afcb2c87-29ef-4558-bc47-43549a5004b2";
const LIT_CODES = {
  selectOneSegment:
    "Please select one segment from dropdown before proceeding!",
  segmentSelectedTryOther: "Oops Segment already added try different one",
  provideName: "Please provide the name of the Segment!",
};
const iconUrl =
  "https://s3.amazonaws.com/files.freshteam.com/production/8478/attachments/2000117623/logo/Logo_icon_240x240.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIARX2EI6XT35NBUDTR%2F20251019%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251019T131514Z&X-Amz-Expires=604800&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLWVhc3QtMSJHMEUCIDhmAdsAFSgiZydMdGYWcmHQ0RHl9knXUkbTAzrU1e1FAiEAuS6UrmI5q4ZwIukaotbThs9NxbfdlcegWLEYDcHIcPgquQUI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgwxMTk4NjU0MDY5NTEiDG1ZJlhWGuU2aUULGCqNBQBMzzkVt%2FgiiEvaBghZgXuy%2FVD7uoioVzugBNRZkyRaQziPGxMU94QG4Qi%2BoaUEtFvfmmwK3IT%2Ff%2B5TCAO6CW%2Fl0fHMJ0yTEbqxFHfkyL%2BUt6jyx6hGwf04TFNHXHsK3YyjnWQMmXMwmrSpdosQ2I7TsjubfEvkea7IIxtYrSMxtQs9ZVSI338Kebd4xZ8WFjD1F%2Bs6J0YscMpkbWe%2BiQvmQrgQShZ%2BsmHrGnygYjB4qmVRdnLZO%2FfrvjObAnIVj8fypFpZKdBJaPO%2B1Hngy9kMX2geU1FDAEgioaUrY0nHc%2BwHMumqwamGnYef%2FrWS8jSxs%2BC53zoyBlXuJJBQ4b5JJ4K03Aw0pi04v8QR3DlET2HIgfrJCP7XF6vs0lv2J%2BBpihzncNKv8ue7xKQuHbLOySTxgd2%2B5s4CunVR3D04SRkiK9ECR2RvXZ9VqQ9Ud6SAq%2FJUdavP4cx44W9gUKUw9lchWMh2ZMWO6NrjKL6OS%2FMImyuXcPvEoJ2RJKrextdvzEOXJ3M4w%2F2x57Fi1TGFw87hWWcxj1EI2QXZDxasfx0KbuIGEWPFn9T%2F%2BIlll78GoHZ84cu%2FNIb%2F5Woi3lKCKM%2FZlWxmCGbbhN0qkFdL2lVuOOBItcBdfuGvHuyhfJQQo%2B4507u%2BmRAUCfjB5GNPecBJ8Gyrhr1zgiaCTd1jn%2BWuxsRIstoDlP8t0OMfKSL0EYv5jlqXY7OgP2MGivRrkrDN316%2Fv5gaaZ884KtzP1ohT6T9lUbZ5y5usVQ2d2gopIjn0nZda22ZQPrHBMPDVgzQIei%2F%2FuXCrHYelGNpDdynQJqs157Wd2zDCArhdNvWZH97HoVxUcHGxM4Jlg5sFjjiRQf2pIU%2Bm9GtMO6i08cGOrEBy%2FYYTYswyh5Zi8ScjPdihjcpzTE7pBO4m6Fw5NhYhX%2Bc7XGZTgg373QrxbEH5hDupeNYDrmgK0b0g28duRdtnqN86UlZfTTB6Jj7q%2FbucYizbkdRVTAmwABAwo06dy4vqjjeL05%2FclIK8DTEyzsR1QNMwhVM7C%2BQX3UfNH6zxDYP3Jw0Gvj5AdAJj2ux2S6AP5awi3ZlrZckv6YHX2hu5tZO5tEOVKooCq1h6L8rlkuy&X-Amz-SignedHeaders=host&X-Amz-Signature=4c09856bb6e88db65d7cd43ce7458713ec270059eda44895c81573b37365d176";
export { DropDownOptions, uniqueApi, iconUrl, LIT_CODES };
