"use server";

import { ConnectToDatabase } from "@/db/mongoose";
import { IMovie, Movie } from "@/db/models/movie.model";

export const getAllMovies = async () => {
  try {
    ConnectToDatabase();
    const data: IMovie[] = await Movie.find({});
    return data;
  } catch (error) {
    console.log(error);
  }
};
