const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  picture: {
    type: String,
    default: "https://barcarena.pa.gov.br/portal/img/perfil/padrao.jpg",
  },
  cover: {
    type: String,
    default:
      "https://blog.seriloncrafts.com.br/wp-content/themes/shadower-pro/assets/images/default-cover.jpg",
  },
  city: { type: String, default: "" },
  cohort: { type: String, default: "" },
  institution: { type: String, default: "" },
  about: { type: String, default: "" },
  linkedin: { type: String, default: "" },
  github: { type: String, default: "" },
  project1name: { type: String, default: "" },
  project1demo: { type: String, default: "" },
  project1url: { type: String, default: "" },
  project2name: { type: String, default: "" },
  project2demo: { type: String, default: "" },
  project2url: { type: String, default: "" },
  project3name: { type: String, default: "" },
  project3demo: { type: String, default: "" },
  project3url: { type: String, default: "" },
  stacks: { type: Array, default: [] },
});

const UserModel = model("User", UserSchema);

module.exports = UserModel;

// teste
