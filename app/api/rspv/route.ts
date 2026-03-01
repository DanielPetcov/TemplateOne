import { google } from "googleapis";
import { NextResponse } from "next/server";

import z from "zod";

import { FormContact } from "@/app/schemas/formSchema";

export async function POST(req: Request) {
  const body: z.infer<typeof FormContact> = await req.json();

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "Sheet1!A:E",
    valueInputOption: "RAW",
    requestBody: {
      values: [
        [
          body.fullName,
          body.willCome ? "Da" : "Nu",
          body.willBeChildren ? "Da" : "Nu",
          body.personsNumber,
          body.comment,
        ],
      ],
    },
  });

  return NextResponse.json({ success: true });
}
