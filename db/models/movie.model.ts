import { Schema, model, Document, models } from "mongoose";

type MovieRating = "E" | "PG" | "18+";

export interface IMovie extends Document {
  title: string;
  thumbnail: {
    trending: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: string;
  rating: MovieRating;
  isBookmarked: boolean;
  isTrending: boolean;
}

const movieSchema = new Schema<IMovie>(
  {
    title: {
      type: String,
      required: true,
    },
    thumbnail: {
      trending: {
        small: {
          type: String,
          required: true,
        },
        large: {
          type: String,
          required: true,
        },
      },
      regular: {
        small: {
          type: String,
          required: true,
        },
        medium: {
          type: String,
          required: true,
        },
        large: {
          type: String,
          required: true,
        },
      },
    },
    year: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
      enum: ["E", "PG", "18+"],
    } as const,
    isBookmarked: {
      type: Boolean,
      required: true,
    },
    isTrending: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

export const Movie = models.Movie || model<IMovie>("Movie", movieSchema);
