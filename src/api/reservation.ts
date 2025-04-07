const reservationData = [
    {
      "reservation_id": "a08cda65-83d4-4762-a504-8ee65d946873",
      "guest": {
        "full_name": "Office Assistant II",
        "gender": "Unknown"
      },
      "room": {
        "room_id": "1",
        "name": "PRAVASTATIN SODIUM",
        "room_price": "241.16",
        "room_type": "Standard"
      },
      "cleaning_fee": 24.37,
      "createdAt": "2023-11-17T12:00:00Z",
      "check_in": "2026-04-09T14:00:00Z",
      "check_out": "2022-01-19T12:00:00Z",
      "booking_status": "confirmed"
    },
    {
      "reservation_id": "cdf6a09c-a6b0-43ac-976d-72a795581962",
      "guest": {
        "full_name": "VP Marketing",
        "gender": "Unknown"
      },
      "room": {
        "room_id": "2",
        "name": "Purpose",
        "room_price": "579.91",
        "room_type": "Deluxe"
      },
      "cleaning_fee": 23.84,
      "createdAt": "2023-11-17T12:00:00Z",
      "check_in": "2022-04-26T14:00:00Z",
      "check_out": "2023-08-17T12:00:00Z",
      "booking_status": "confirmed"
    },
    {
      "reservation_id": "fc8a127d-08c1-41c5-a6d0-7e122a551f15",
      "guest": {
        "full_name": "Paralegal",
        "gender": "Unknown"
      },
      "room": {
        "room_id": "3",
        "name": "good sense pain relief",
        "room_price": "2004.75",
        "room_type": "Suite"
      },
      "cleaning_fee": 27.11,
      "createdAt": "2023-11-17T12:00:00Z",
      "check_in": "2023-12-14T14:00:00Z",
      "check_out": "2022-08-31T12:00:00Z",
      "booking_status": "confirmed"
    },
    {
      "reservation_id": "c0a7e380-6fab-46f8-9c10-1d0288e4b05a",
      "guest": {
        "full_name": "Assistant Professor",
        "gender": "Unknown"
      },
      "room": {
        "room_id": "4",
        "name": "Tussin CF",
        "room_price": "497.98",
        "room_type": "Standard"
      },
      "cleaning_fee": 20.05,
      "createdAt": "2023-11-17T12:00:00Z",
      "check_in": "2023-11-21T14:00:00Z",
      "check_out": "2021-09-02T12:00:00Z",
      "booking_status": "confirmed"
    },
    {
      "reservation_id": "16aa24a3-f7a6-4d9d-8fae-252667634ace",
      "guest": {
        "full_name": "Product Engineer",
        "gender": "Unknown"
      },
      "room": {
        "room_id": "5",
        "name": "Para-Chord",
        "room_price": "1707.97",
        "room_type": "Deluxe"
      },
      "cleaning_fee": 25.36,
      "createdAt": "2023-11-17T12:00:00Z",
      "check_in": "2021-09-07T14:00:00Z",
      "check_out": "2021-04-14T12:00:00Z",
      "booking_status": "confirmed"
    },
    {
      "reservation_id": "acb06525-8248-4bf4-94a2-29ab3770af20",
      "guest": {
        "full_name": "Desktop Support Technician",
        "gender": "Unknown"
      },
      "room": {
        "room_id": "6",
        "name": "Mucus Relief",
        "room_price": "1637.46",
        "room_type": "Suite"
      },
      "cleaning_fee": 27.62,
      "createdAt": "2023-11-17T12:00:00Z",
      "check_in": "2021-08-27T14:00:00Z",
      "check_out": "2025-04-10T12:00:00Z",
      "booking_status": "confirmed"
    },
    {
      "reservation_id": "36b511a5-d999-4122-b1a8-2b30d5fe2a29",
      "guest": {
        "full_name": "Chemical Engineer",
        "gender": "Unknown"
      },
      "room": {
        "room_id": "7",
        "name": "Fluoxetine hydrochloride",
        "room_price": "679.55",
        "room_type": "Standard"
      },
      "cleaning_fee": 21.56,
      "createdAt": "2023-11-17T12:00:00Z",
      "check_in": "2025-01-27T14:00:00Z",
      "check_out": "2023-11-16T12:00:00Z",
      "booking_status": "confirmed"
    },
    {
      "reservation_id": "a0811091-3857-4ba0-ba25-87ab4c2febc6",
      "guest": {
        "full_name": "Analyst Programmer",
        "gender": "Unknown"
      },
      "room": {
        "room_id": "8",
        "name": "Sterile Water",
        "room_price": "2147.36",
        "room_type": "Deluxe"
      },
      "cleaning_fee": 22.34,
      "createdAt": "2023-11-17T12:00:00Z",
      "check_in": "2022-08-29T14:00:00Z",
      "check_out": "2023-02-26T12:00:00Z",
      "booking_status": "confirmed"
    },
    {
      "reservation_id": "2557ee1e-3063-4b89-80ce-b79dc7299d11",
      "guest": {
        "full_name": "Senior Quality Engineer",
        "gender": "Unknown"
      },
      "room": {
        "room_id": "9",
        "name": "Atorvastatin Calcium",
        "room_price": "1209.44",
        "room_type": "Suite"
      },
      "cleaning_fee": 29.40,
      "createdAt": "2023-11-17T12:00:00Z",
      "check_in": "2021-12-05T14:00:00Z",
      "check_out": "2022-06-28T12:00:00Z",
      "booking_status": "confirmed"
    },
    {
      "reservation_id": "8a29a574-9df0-4e0c-bd61-a1aaa9093840",
      "guest": {
        "full_name": "Pharmacist",
        "gender": "Unknown"
      },
      "room": {
        "room_id": "10",
        "name": "Walgreens",
        "room_price": "1388.34",
        "room_type": "Standard"
      },
      "cleaning_fee": 20.67,
      "createdAt": "2023-11-17T12:00:00Z",
      "check_in": "2022-12-19T14:00:00Z",
      "check_out": "2022-02-10T12:00:00Z",
      "booking_status": "confirmed"
    },
    {
      "reservation_id": "1f3b917f-ca33-4434-bc23-fd0fa48e4a8b",
      "guest": {
        "full_name": "Internal Auditor",
        "gender": "Unknown"
      },
      "room": {
        "room_id": "11",
        "name": "Ibuprofen",
        "room_price": "631.51",
        "room_type": "Deluxe"
      },
      "cleaning_fee": 24.99,
      "createdAt": "2023-11-17T12:00:00Z",
      "check_in": "2026-01-02T14:00:00Z",
      "check_out": "2021-04-12T12:00:00Z",
      "booking_status": "confirmed"
    },
    {
      "reservation_id": "58900aa3-0a9f-4915-a70b-dca888e72187",
      "guest": {
        "full_name": "General Manager",
        "gender": "Unknown"
      },
      "room": {
        "room_id": "12",
        "name": "Prednisone",
        "room_price": "141.03",
        "room_type": "Suite"
      },
      "cleaning_fee": 29.58,
      "createdAt": "2023-11-17T12:00:00Z",
      "check_in": "2026-09-17T14:00:00Z",
      "check_out": "2025-10-01T12:00:00Z",
      "booking_status": "confirmed"
    },
    {
      "reservation_id": "5f749c86-4f08-446e-aa84-cc4e0610de4b",
      "guest": {
        "full_name": "Geologist III",
        "gender": "Unknown"
      },
      "room": {
        "room_id": "13",
        "name": "Bupropion Hydrochloride",
        "room_price": "1240.86",
        "room_type": "Standard"
      },
      "cleaning_fee": 25.32,
      "createdAt": "2023-11-17T12:00:00Z",
      "check_in": "2023-09-02T14:00:00Z",
      "check_out": "2024-08-31T12:00:00Z",
      "booking_status": "confirmed"
    },
    {
      "reservation_id": "f41fba23-ba66-4ccc-bd38-87a6c0a2559f",
      "guest": {
        "full_name": "Data Coordinator",
        "gender": "Unknown"
      },
      "room": {
        "room_id": "14",
        "name": "Ecolab",
        "room_price": "931.69",
        "room_type": "Deluxe"
      },
      "cleaning_fee": 28.10,
      "createdAt": "2023-11-17T12:00:00Z",
      "check_in": "2025-10-22T14:00:00Z",
      "check_out": "2024-08-04T12:00:00Z",
      "booking_status": "confirmed"
    },
    {
      "reservation_id": "4d066c72-561d-46e7-b77f-c9a13fbbbd69",
      "guest": {
        "full_name": "Desktop Support Technician",
        "gender": "Unknown"
      },
      "room": {
        "room_id": "15",
        "name": "Quelicin",
        "room_price": "1488.25",
        "room_type": "Suite"
      },
      "cleaning_fee": 22.51,
      "createdAt": "2023-11-17T12:00:00Z",
      "check_in": "2022-04-19T14:00:00Z",
      "check_out": "2026-02-22T12:00:00Z",
      "booking_status": "confirmed"
    },
    {
      "reservation_id": "81f2d576-ab16-4874-8176-5480cd1490e0",
      "guest": {
        "full_name": "Nurse",
        "gender": "Unknown"
      },
      "room": {
        "room_id": "16",
        "name": "hA2cg Evolution",
        "room_price": "2136.98",
        "room_type": "Standard"
      },
      "cleaning_fee": 27.54,
      "createdAt": "2023-11-17T12:00:00Z",
      "check_in": "2024-05-25T14:00:00Z",
      "check_out": "2024-04-19T12:00:00Z",
      "booking_status": "confirmed"
    },
    {
      "reservation_id": "666a7a32-120d-4752-bde5-96d9f2b4945f",
      "guest": {
        "full_name": "Dental Hygienist",
        "gender": "Unknown"
      },
      "room": {
        "room_id": "17",
        "name": "Oxygen",
        "room_price": "2244.96",
        "room_type": "Deluxe"
      },
      "cleaning_fee": 24.65,
      "createdAt": "2023-11-17T12:00:00Z",
      "check_in": "2023-05-21T14:00:00Z",
      "check_out": "2025-10-22T12:00:00Z",
      "booking_status": "confirmed"
    },
    {
      "reservation_id": "3b08a092-dc30-49fb-ab56-7ef38804e7a6",
      "guest": {
        "full_name": "Financial Advisor",
        "gender": "Unknown"
      },
      "room": {
        "room_id": "18",
        "name": "Oxygen",
        "room_price": "1333.07",
        "room_type": "Suite"
      },
      "cleaning_fee": 29.61,
      "createdAt": "2023-11-17T12:00:00Z",
      "check_in": "2022-11-28T14:00:00Z",
      "check_out": "2022-10-23T12:00:00Z",
      "booking_status": "confirmed"
    },
    {
      "reservation_id": "c5ac77a0-4c60-4abe-851b-642f52ed9309",
      "guest": {
        "full_name": "Programmer IV",
        "gender": "Unknown"
      },
      "room": {
        "room_id": "19",
        "name": "Androtox",
        "room_price": "542.16",
        "room_type": "Standard"
      },
      "cleaning_fee": 27.05,
      "createdAt": "2023-11-17T12:00:00Z",
      "check_in": "2024-07-09T14:00:00Z",
      "check_out": "2024-05-20T12:00:00Z",
      "booking_status": "confirmed"
    },
    {
      "reservation_id": "ce04f46e-0c8d-4075-94e5-4d7a70a05edf",
      "guest": {
        "full_name": "Financial Analyst",
        "gender": "Unknown"
      },
      "room": {
        "room_id": "20",
        "name": "Levothyroxine Sodium",
        "room_price": "1059.04",
        "room_type": "Deluxe"
      },
      "cleaning_fee": 28.02,
      "createdAt": "2023-11-17T12:00:00Z",
      "check_in": "2022-10-22T14:00:00Z",
      "check_out": "2021-11-30T12:00:00Z",
      "booking_status": "confirmed"
    },
    {
      "reservation_id": "5e4e77ac-dc2b-4faa-bd87-41c85e986948",
      "guest": {
        "full_name": "Nuclear Power Engineer",
        "gender": "Unknown"
      },
      "room": {
        "room_id": "21",
        "name": "Spot Repairing Serum",
        "room_price": "1377.03",
        "room_type": "Suite"
      },
      "cleaning_fee": 24.95,
      "createdAt": "2023-11-17T12:00:00Z",
      "check_in": "2021-11-17T14:00:00Z",
      "check_out": "2021-04-20T12:00:00Z",
      "booking_status": "confirmed"
    },
    {
      "reservation_id": "acc8f4ab-ca58-4bdf-9c37-68c51b76e0e4",
      "guest": {
        "full_name": "Chief Design Engineer",
        "gender": "Unknown"
      },
      "room": {
        "room_id": "22",
        "name": "stila CC color correcting broad-spectrum SPF 20 04 MEDIUM",
        "room_price": "1700.04",
        "room_type": "Standard"
      },
      "cleaning_fee": 28.35,
      "createdAt": "2023-11-17T12:00:00Z",
      "check_in": "2021-04-21T14:00:00Z",
      "check_out": "2022-08-01T12:00:00Z",
      "booking_status": "confirmed"
    },
    {
      "reservation_id": "1f221c24-d0c6-406a-b5fa-c605d77dd414",
      "guest": {
        "full_name": "Geologist IV",
        "gender": "Unknown"
      },
      "room": {
        "room_id": "23",
        "name": "Lipitor",
        "room_price": "293.41",
        "room_type": "Deluxe"
      },
      "cleaning_fee": 23.63,
      "createdAt": "2023-11-17T12:00:00Z",
      "check_in": "2024-08-17T14:00:00Z",
      "check_out": "2021-10-27T12:00:00Z",
      "booking_status": "confirmed"
    },
    {
      "reservation_id": "a2517acc-5372-4261-841b-0b77134d415e",
      "guest": {
        "full_name": "Web Designer IV",
        "gender": "Unknown"
      },
      "room": {
        "room_id": "24",
        "name": "Quetiapine Fumarate",
        "room_price": "2251.32",
        "room_type": "Suite"
      },
      "cleaning_fee": 21.16,
      "createdAt": "2023-11-17T12:00:00Z",
      "check_in": "2026-08-14T14:00:00Z",
      "check_out": "2024-11-24T12:00:00Z",
      "booking_status": "confirmed"
    },
    {
      "reservation_id": "6ad120a3-30a3-4437-a868-32665f6625bb",
      "guest": {
        "full_name": "Nuclear Power Engineer",
        "gender": "Unknown"
      },
      "room": {
        "room_id": "25",
        "name": "Vyvanse",
        "room_price": "228.65",
        "room_type": "Standard"
      },
      "cleaning_fee": 29.66,
      "createdAt": "2023-11-17T12:00:00Z",
      "check_in": "2024-04-03T14:00:00Z",
      "check_out": "2024-01-20T12:00:00Z",
      "booking_status": "confirmed"
    },
    {
      "reservation_id": "34e2ed9d-c390-4127-afb9-abe6e091a444",
      "guest": {
        "full_name": "VP Marketing",
        "gender": "Unknown"
      },
      "room": {
        "room_id": "26",
        "name": "Progesterone",
        "room_price": "480.85",
        "room_type": "Deluxe"
      },
      "cleaning_fee": 24.67,
      "createdAt": "2023-11-17T12:00:00Z",
      "check_in": "2024-02-13T14:00:00Z",
      "check_out": "2023-06-19T12:00:00Z",
      "booking_status": "confirmed"
    },
    {
      "reservation_id": "b23d3c00-aeda-44b4-8d7d-9ecd9e202c8c",
      "guest": {
        "full_name": "Social Worker",
        "gender": "Unknown"
      },
      "room": {
        "room_id": "27",
        "name": "TOPIRAMATE",
        "room_price": "2165.78",
        "room_type": "Suite"
      },
      "cleaning_fee": 24.01,
      "createdAt": "2023-11-17T12:00:00Z",
      "check_in": "2025-12-31T14:00:00Z",
      "check_out": "2025-07-25T12:00:00Z",
      "booking_status": "confirmed"
    },
    {
      "reservation_id": "e4fc0c65-2926-47c0-9be2-74c405c33b1f",
      "guest": {
        "full_name": "Developer IV",
        "gender": "Unknown"
      },
      "room": {
        "room_id": "28",
        "name": "PEPSOM FLYING P EPSOM SALT",
        "room_price": "2040.53",
        "room_type": "Standard"
      },
      "cleaning_fee": 22.07,
      "createdAt": "2023-11-17T12:00:00Z",
      "check_in": "2023-03-18T14:00:00Z",
      "check_out": "2021-07-19T12:00:00Z",
      "booking_status": "confirmed"
    },
    {
      "reservation_id": "00a18fa1-7444-497c-a2c9-300bad844479",
      "guest": {
        "full_name": "Engineer II",
        "gender": "Unknown"
      },
      "room": {
        "room_id": "29",
        "name": "Childrens Cough Relief",
        "room_price": "1009.63",
        "room_type": "Deluxe"
      },
      "cleaning_fee": 23.33,
      "createdAt": "2023-11-17T12:00:00Z",
      "check_in": "2025-11-27T14:00:00Z",
      "check_out": "2024-11-20T12:00:00Z",
      "booking_status": "confirmed"
    },
    {
      "reservation_id": "7f4b37e6-dcf2-48db-bc1a-2c7b3d3d7acb",
      "guest": {
        "full_name": "Professor",
        "gender": "Unknown"
      },
      "room": {
        "room_id": "30",
        "name": "MOISTURIZING SUNSCREEN SPF15",
        "room_price": "1017.04",
        "room_type": "Suite"
      },
      "cleaning_fee": 25.07,
      "createdAt": "2023-11-17T12:00:00Z",
      "check_in": "2026-04-09T14:00:00Z",
      "check_out": "2023-01-31T12:00:00Z",
      "booking_status": "confirmed"
    },
    {
      "reservation_id": "aecaa143-a8c3-4fa9-8258-940223e4e66d",
      "guest": {
        "full_name": "Senior Financial Analyst",
        "gender": "Unknown"
      },
      "room": {
        "room_id": "31",
        "name": "Ponderosa Pine",
        "room_price": "1787.78",
        "room_type": "Standard"
      },
      "cleaning_fee": 22.03,
      "createdAt": "2023-11-17T12:00:00Z",
      "check_in": "2021-10-02T14:00:00Z",
      "check_out": "2024-03-24T12:00:00Z",
      "booking_status": "confirmed"
    },
    {
      "reservation_id": "3c1c8e56-12d1-49fb-b71b-c7a83c402a30",
      "guest": {
        "full_name": "Community Outreach Specialist",
        "gender": "Unknown"
      },
      "room": {
        "room_id": "32",
        "name": "Levocetirizine Dihydrochloride",
        "room_price": "1405.40",
        "room_type": "Deluxe"
      },
      "cleaning_fee": 22.56,
      "createdAt": "2023-11-17T12:00:00Z",
      "check_in": "2023-02-24T14:00:00Z",
      "check_out": "2021-03-31T12:00:00Z",
      "booking_status": "confirmed"
    },
    {
      "reservation_id": "85c3ef6d-3201-4fba-8e03-95d9d7a1597c",
      "guest": {
        "full_name": "Senior Editor",
        "gender": "Unknown"
      },
      "room": {
        "room_id": "33",
        "name": "BANANA BOAT",
        "room_price": "596.37",
        "room_type": "Suite"
      },
      "cleaning_fee": 28.22,
      "createdAt": "2023-11-17T12:00:00Z",
      "check_in": "2025-06-29T14:00:00Z",
      "check_out": "2025-04-22T12:00:00Z",
      "booking_status": "confirmed"
    },
    {
        "reservation_id": "a08cda65-83d4-4762-a504-8ee65d946873",
        "guest": {
          "full_name": "Office Assistant II",
          "gender": "Unknown"
        },
        "room": {
          "room_id": "PRAVASTATIN SODIUM",
          "name": "PRAVASTATIN SODIUM",
          "room_price": "241.16",
          "room_type": "Unknown"
        },
        "cleaning_fee": 24.37,
        "createdAt": "2026-04-09T00:00:00Z",
        "check_in": "2026-04-09T00:00:00Z",
        "check_out": "2022-01-19T00:00:00Z",
        "booking_status": "confirmed"
      },
      {
        "reservation_id": "cdf6a09c-a6b0-43ac-976d-72a795581962",
        "guest": {
          "full_name": "VP Marketing",
          "gender": "Unknown"
        },
        "room": {
          "room_id": "Purpose",
          "name": "Purpose",
          "room_price": "579.91",
          "room_type": "Unknown"
        },
        "cleaning_fee": 23.84,
        "createdAt": "2022-04-26T00:00:00Z",
        "check_in": "2022-04-26T00:00:00Z",
        "check_out": "2023-08-17T00:00:00Z",
        "booking_status": "confirmed"
      },
      {
        "reservation_id": "fc8a127d-08c1-41c5-a6d0-7e122a551f15",
        "guest": {
          "full_name": "Paralegal",
          "gender": "Unknown"
        },
        "room": {
          "room_id": "good sense pain relief",
          "name": "good sense pain relief",
          "room_price": "2004.75",
          "room_type": "Unknown"
        },
        "cleaning_fee": 27.11,
        "createdAt": "2023-12-14T00:00:00Z",
        "check_in": "2023-12-14T00:00:00Z",
        "check_out": "2022-08-31T00:00:00Z",
        "booking_status": "confirmed"
      },
      {
        "reservation_id": "c0a7e380-6fab-46f8-9c10-1d0288e4b05a",
        "guest": {
          "full_name": "Assistant Professor",
          "gender": "Unknown"
        },
        "room": {
          "room_id": "Tussin CF",
          "name": "Tussin CF",
          "room_price": "497.98",
          "room_type": "Unknown"
        },
        "cleaning_fee": 20.05,
        "createdAt": "2023-11-21T00:00:00Z",
        "check_in": "2023-11-21T00:00:00Z",
        "check_out": "2021-09-02T00:00:00Z",
        "booking_status": "confirmed"
      },
      {
        "reservation_id": "16aa24a3-f7a6-4d9d-8fae-252667634ace",
        "guest": {
          "full_name": "Product Engineer",
          "gender": "Unknown"
        },
        "room": {
          "room_id": "Para-Chord",
          "name": "Para-Chord",
          "room_price": "1707.97",
          "room_type": "Unknown"
        },
        "cleaning_fee": 25.36,
        "createdAt": "2021-09-07T00:00:00Z",
        "check_in": "2021-09-07T00:00:00Z",
        "check_out": "2021-04-14T00:00:00Z",
        "booking_status": "confirmed"
      },
      {
        "reservation_id": "acb06525-8248-4bf4-94a2-29ab3770af20",
        "guest": {
          "full_name": "Desktop Support Technician",
          "gender": "Unknown"
        },
        "room": {
          "room_id": "Mucus Relief",
          "name": "Mucus Relief",
          "room_price": "1637.46",
          "room_type": "Unknown"
        },
        "cleaning_fee": 27.62,
        "createdAt": "2021-08-27T00:00:00Z",
        "check_in": "2021-08-27T00:00:00Z",
        "check_out": "2025-04-10T00:00:00Z",
        "booking_status": "confirmed"
      },
      {
        "reservation_id": "36b511a5-d999-4122-b1a8-2b30d5fe2a29",
        "guest": {
          "full_name": "Chemical Engineer",
          "gender": "Unknown"
        },
        "room": {
          "room_id": "Fluoxetine hydrochloride",
          "name": "Fluoxetine hydrochloride",
          "room_price": "679.55",
          "room_type": "Unknown"
        },
        "cleaning_fee": 21.56,
        "createdAt": "2025-01-27T00:00:00Z",
        "check_in": "2025-01-27T00:00:00Z",
        "check_out": "2023-11-16T00:00:00Z",
        "booking_status": "confirmed"
      },
      {
        "reservation_id": "a0811091-3857-4ba0-ba25-87ab4c2febc6",
        "guest": {
          "full_name": "Analyst Programmer",
          "gender": "Unknown"
        },
        "room": {
          "room_id": "Sterile Water",
          "name": "Sterile Water",
          "room_price": "2147.36",
          "room_type": "Unknown"
        },
        "cleaning_fee": 22.34,
        "createdAt": "2022-08-29T00:00:00Z",
        "check_in": "2022-08-29T00:00:00Z",
        "check_out": "2023-02-26T00:00:00Z",
        "booking_status": "confirmed"
      },
      {
        "reservation_id": "2557ee1e-3063-4b89-80ce-b79dc7299d11",
        "guest": {
          "full_name": "Senior Quality Engineer",
          "gender": "Unknown"
        },
        "room": {
          "room_id": "Atorvastatin Calcium",
          "name": "Atorvastatin Calcium",
          "room_price": "1209.44",
          "room_type": "Unknown"
        },
        "cleaning_fee": 29.4,
        "createdAt": "2021-12-05T00:00:00Z",
        "check_in": "2021-12-05T00:00:00Z",
        "check_out": "2022-06-28T00:00:00Z",
        "booking_status": "confirmed"
      },
      {
        "reservation_id": "8a29a574-9df0-4e0c-bd61-a1aaa9093840",
        "guest": {
          "full_name": "Pharmacist",
          "gender": "Unknown"
        },
        "room": {
          "room_id": "Walgreens",
          "name": "Walgreens",
          "room_price": "1388.34",
          "room_type": "Unknown"
        },
        "cleaning_fee": 20.67,
        "createdAt": "2022-12-19T00:00:00Z",
        "check_in": "2022-12-19T00:00:00Z",
        "check_out": "2022-02-10T00:00:00Z",
        "booking_status": "confirmed"
      },
      {
        "reservation_id": "1f3b917f-ca33-4434-bc23-fd0fa48e4a8b",
        "guest": {
          "full_name": "Internal Auditor",
          "gender": "Unknown"
        },
        "room": {
          "room_id": "Ibuprofen",
          "name": "Ibuprofen",
          "room_price": "631.51",
          "room_type": "Unknown"
        },
        "cleaning_fee": 24.99,
        "createdAt": "2026-01-02T00:00:00Z",
        "check_in": "2026-01-02T00:00:00Z",
        "check_out": "2021-04-12T00:00:00Z",
        "booking_status": "confirmed"
      },
      {
        "reservation_id": "58900aa3-0a9f-4915-a70b-dca888e72187",
        "guest": {
          "full_name": "General Manager",
          "gender": "Unknown"
        },
        "room": {
          "room_id": "Prednisone",
          "name": "Prednisone",
          "room_price": "141.03",
          "room_type": "Unknown"
        },
        "cleaning_fee": 29.58,
        "createdAt": "2026-09-17T00:00:00Z",
        "check_in": "2026-09-17T00:00:00Z",
        "check_out": "2025-10-01T00:00:00Z",
        "booking_status": "confirmed"
      },
      {
        "reservation_id": "5f749c86-4f08-446e-aa84-cc4e0610de4b",
        "guest": {
          "full_name": "Geologist III",
          "gender": "Unknown"
        },
        "room": {
          "room_id": "Bupropion Hydrochloride",
          "name": "Bupropion Hydrochloride",
          "room_price": "1240.86",
          "room_type": "Unknown"
        },
        "cleaning_fee": 25.32,
        "createdAt": "2023-09-02T00:00:00Z",
        "check_in": "2023-09-02T00:00:00Z",
        "check_out": "2024-08-31T00:00:00Z",
        "booking_status": "confirmed"
      },
      {
        "reservation_id": "f41fba23-ba66-4ccc-bd38-87a6c0a2559f",
        "guest": {
          "full_name": "Data Coordinator",
          "gender": "Unknown"
        },
        "room": {
          "room_id": "Ecolab",
          "name": "Ecolab",
          "room_price": "931.69",
          "room_type": "Unknown"
        },
        "cleaning_fee": 28.1,
        "createdAt": "2025-10-22T00:00:00Z",
        "check_in": "2025-10-22T00:00:00Z",
        "check_out": "2024-08-04T00:00:00Z",
        "booking_status": "confirmed"
      },
      {
        "reservation_id": "4d066c72-561d-46e7-b77f-c9a13fbbbd69",
        "guest": {
          "full_name": "Desktop Support Technician",
          "gender": "Unknown"
        },
        "room": {
          "room_id": "Quelicin",
          "name": "Quelicin",
          "room_price": "1488.25",
          "room_type": "Unknown"
        },
        "cleaning_fee": 22.51,
        "createdAt": "2022-04-19T00:00:00Z",
        "check_in": "2022-04-19T00:00:00Z",
        "check_out": "2026-02-22T00:00:00Z",
        "booking_status": "confirmed"
      },
      {
        "reservation_id": "81f2d576-ab16-4874-8176-5480cd1490e0",
        "guest": {
          "full_name": "Nurse",
          "gender": "Unknown"
        },
        "room": {
          "room_id": "hA2cg Evolution",
          "name": "hA2cg Evolution",
          "room_price": "2136.98",
          "room_type": "Unknown"
        },
        "cleaning_fee": 27.54,
        "createdAt": "2024-05-25T00:00:00Z",
        "check_in": "2024-05-25T00:00:00Z",
        "check_out": "2024-04-19T00:00:00Z",
        "booking_status": "confirmed"
      },
      {
        "reservation_id": "666a7a32-120d-4752-bde5-96d9f2b4945f",
        "guest": {
          "full_name": "Dental Hygienist",
          "gender": "Unknown"
        },
        "room": {
          "room_id": "Oxygen",
          "name": "Oxygen",
          "room_price": "2244.96",
          "room_type": "Unknown"
        },
        "cleaning_fee": 24.65,
        "createdAt": "2023-05-21T00:00:00Z",
        "check_in": "2023-05-21T00:00:00Z",
        "check_out": "2025-10-22T00:00:00Z",
        "booking_status": "confirmed"
      },
      {
        "reservation_id": "3b08a092-dc30-49fb-ab56-7ef38804e7a6",
        "guest": {
          "full_name": "Financial Advisor",
          "gender": "Unknown"
        },
        "room": {
          "room_id": "Oxygen",
          "name": "Oxygen",
          "room_price": "1333.07",
          "room_type": "Unknown"
        },
        "cleaning_fee": 29.61,
        "createdAt": "2022-11-28T00:00:00Z",
        "check_in": "2022-11-28T00:00:00Z",
        "check_out": "2022-10-23T00:00:00Z",
        "booking_status": "confirmed"
      },
      {
        "reservation_id": "c5ac77a0-4c60-4abe-851b-642f52ed9309",
        "guest": {
          "full_name": "Programmer IV",
          "gender": "Unknown"
        },
        "room": {
          "room_id": "Androtox",
          "name": "Androtox",
          "room_price": "542.16",
          "room_type": "Unknown"
        },
        "cleaning_fee": 27.05,
        "createdAt": "2024-07-09T00:00:00Z",
        "check_in": "2024-07-09T00:00:00Z",
        "check_out": "2024-05-20T00:00:00Z",
        "booking_status": "confirmed"
      },
      {
        "reservation_id": "ce04f46e-0c8d-4075-94e5-4d7a70a05edf",
        "guest": {
          "full_name": "Financial Analyst",
          "gender": "Unknown"
        },
        "room": {
          "room_id": "Levothyroxine Sodium",
          "name": "Levothyroxine Sodium",
          "room_price": "1059.04",
          "room_type": "Unknown"
        },
        "cleaning_fee": 28.02,
        "createdAt": "2022-10-22T00:00:00Z",
        "check_in": "2022-10-22T00:00:00Z",
        "check_out": "2021-11-30T00:00:00Z",
        "booking_status": "confirmed"
      },
      {
        "reservation_id": "5e4e77ac-dc2b-4faa-bd87-41c85e986948",
        "guest": {
          "full_name": "Nuclear Power Engineer",
          "gender": "Unknown"
        },
        "room": {
          "room_id": "Spot Repairing Serum",
          "name": "Spot Repairing Serum",
          "room_price": "1377.03",
          "room_type": "Unknown"
        },
        "cleaning_fee": 24.95,
        "createdAt": "2021-11-17T00:00:00Z",
        "check_in": "2021-11-17T00:00:00Z",
        "check_out": "2021-04-20T00:00:00Z",
        "booking_status": "confirmed"
      },
      {
        "reservation_id": "acc8f4ab-ca58-4bdf-9c37-68c51b76e0e4",
        "guest": {
          "full_name": "Chief Design Engineer",
          "gender": "Unknown"
        },
        "room": {
          "room_id": "stila CC color correcting broad-spectrum SPF 20 04 MEDIUM",
          "name": "stila CC color correcting broad-spectrum SPF 20 04 MEDIUM",
          "room_price": "1700.04",
          "room_type": "Unknown"
        },
        "cleaning_fee": 28.35,
        "createdAt": "2021-04-21T00:00:00Z",
        "check_in": "2021-04-21T00:00:00Z",
        "check_out": "2022-08-01T00:00:00Z",
        "booking_status": "confirmed"
      },
];

export default reservationData;