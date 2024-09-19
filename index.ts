import Replicate from "replicate";
import * as dotenv from "dotenv";
dotenv.config();

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

async function main() {
	try {

  const training = await replicate.trainings.create(
    "stability-ai",
    "sdxl",
    "7762fd07cf82c948538e41f63f77d685e02b063e37e496e96eefd46c929f9bdc",
    {
      destination: "abhishekmmgn/sdxl-memoji",
      input: {
        input_images: process.env.IMAGES_URL,
      },
    }
  );
  console.log(`URL: https://replicate.com/p/${training.id}`);
	} catch (error) {
	  console.log(`Error occured: ${error}`);
	}	
}
main();

