-- שלב 1: מחיקת כל הנתונים מהטבלה
DELETE FROM [dbo].[Employees];

-- שלב 2: הוספת הנתונים החדשים
INSERT INTO [dbo].[Employees] ([Id], [FirstName], [LastName], [Specialization])
VALUES
('987654321', 'Miriam', 'Ben David', 'Facial Treatments'),
('876543219', 'Lea', 'Shapiro', 'Laser Hair Removal'),
('765432198', 'Tzipora', 'Klein', 'Manicure'),
('654321987', 'Aliza', 'Noy', 'Pedicure'),
('543219876', 'Hadas', 'Shir', 'Anti-Aging Treatments'),
('432198765', 'Shoshana', 'Mizrahi', 'Acne Treatments'),
('321987654', 'Ilana', 'Borstein', 'Body Scrub'),
('219876543', 'Rivka', 'Elbaz', 'Microdermabrasion'),
('198765432', 'Batya', 'Goldberg', 'Facial Treatments'),
('876543210', 'Malka', 'Yarden', 'Laser Hair Removal');