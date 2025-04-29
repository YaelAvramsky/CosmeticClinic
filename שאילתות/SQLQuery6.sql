-- שלב 1: מחיקת כל הנתונים בטבלה
DELETE FROM [dbo].[TreatmentsType];

-- שלב 2: איפוס המפתח הרץ
DBCC CHECKIDENT ('[dbo].[TreatmentsType]', RESEED, 0);

-- שלב 3: הוספת הנתונים החדשים
INSERT INTO [dbo].[TreatmentsType] ([Type], [NumberOfTreatments], [Price])
VALUES
('Facial Treatment', 5, 1500.00),        -- מחיר לטיפול פנים
('Laser Hair Removal', 10, 5000.00),     -- מחיר להסרת שיער בלייזר
('Manicure', 1, 150.00),                 -- מחיר למניקור
('Pedicure', 1, 180.00),                 -- מחיר לפדיקור
('Anti-Aging Treatment', 6, 2500.00),    -- מחיר לטיפול אנטי-אייג'ינג
('Acne Treatment', 8, 2000.00),          -- מחיר לטיפול באקנה
('Body Scrub', 1, 300.00),               -- מחיר לקרצוף גוף
('Microdermabrasion', 4, 1200.00);