import { supabase } from "../config/configSupabase.js";

export class UserProfilesModel {
  static async getAllRecords() {
    try {
      // Kald til database
      let { data, error } = await supabase
        .from("user_profiles")
        .select("user_id, firstname, lastname, birthdate, gender, position");
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Fejl: kan ikke hente user profiles:, ${error}`);
    }
  }

  static async getRecordById(id) {
    try {
      let { data, error } = await supabase
        .from("user_profiles")
        .select("user_id, firstname, lastname, birthdate, gender, position")
        .eq("id", id)
        .single();
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Fejl: kan ikke hente poster, ${error}`);
    }
  }

  static async createRecord(formdata) {
    try {
      let { data, error } = await supabase
        .from("user_profiles")
        .insert([
          {
            user_id: formdata.user_id,
            firstname: formdata.firstname,
            lastname: formdata.lastname,
            birthdate: formdata.birthdate,
            gender: formdata.gender,
            position: formdata.position,
          },
        ])
        .select();
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Fejl: kan ikke insætte poster, ${error}`);
    }
  }

  static async updateRecord(formdata) {
    try {
      let { data, error } = await supabase
        .from("user_profiles")
        .update([
          {
            user_id: formdata.user_id,
            firstname: formdata.firstname,
            lastname: formdata.lastname,
            birthdate: formdata.birthdate,
            gender: formdata.gender,
            position: formdata.position,
          },
        ])
        .eq("id", formdata.id)
        .select();
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Fejl: kunne ikke opdatere poster ${error}`);
    }
  }

  static async deleteRecord(formdata) {
    try {
      let { data, error } = await supabase
        .from("user_profiles")
        .delete()
        .eq("id", formdata.id)
        .select();
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Fejl: kunne ikke slette poster ${error}`);
    }
  }
}
