
import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    id: { type: Number, unique: true, required: true },
    observed_on_string: String,
    observed_on: Date,
    time_observed_at: String,
    time_zone: String,
    user_id: Number,
    user_login: String,
    user_name: String,
    created_at: String,
    updated_at: String,
    quality_grade: String,
    license: String,
    url: String,
    image_url: String,
    sound_url: String,
    tag_list: String,  
    description: String,
    num_identification_agreements: Number,
    num_identification_disagreements: Number,
    captive: Boolean,
    oauth_application_id: Number,
    place_guess: String,
    latitude: Number,
    longitude: Number,
    positional_accuracy: Number,
    geoprivacy: String,
    taxon_geoprivacy: String,
    coordinates_obscured: Boolean,
    positioning_method: String,
    positioning_device: String,
    species_guess: String,
    scientific_name: String,
    common_name: String,
    iconic_taxon_name: String,
    taxon_id: Number,
  },
  { collection: "observation" }
); 

export default schema;
