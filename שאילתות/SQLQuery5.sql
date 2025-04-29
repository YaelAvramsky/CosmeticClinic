-- שלב 1: מחיקת כל הנתונים בטבלה
DELETE FROM [dbo].[TreatmentsType];

-- שלב 2: הוספת הנתונים החדשים
INSERT INTO [dbo].[TreatmentsType] ([Type], [NumberOfTreatments], [Price])
VALUES
('Facial Treatment', 5, 120.00),
('Laser Hair Removal', 10, 200.00),
('Manicure', 1, 50.00),
('Pedicure', 1, 60.00),
('Anti-Aging Treatment', 6, 150.00),
('Acne Treatment', 8, 130.00),
('Body Scrub', 1, 80.00),
('Microdermabrasion', 4, 140.00);