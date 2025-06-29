﻿DELETE FROM [dbo].[UnavailableAppointments];

INSERT INTO [dbo].[UnavailableAppointments] ([Date], [Hour], [Day], [EmployeeID], [ClintID], [Duration])
VALUES
('2025-03-26', '10:00:00', 'Wednesday', '987654321', '123456789', 30),  -- Yael Avramsky with Miriam Ben David (Facial Treatment)
('2025-03-27', '11:00:00', 'Thursday', '876543219', '234567891', 30),  -- Rina Levi with Lea Shapiro (Laser Hair Removal)
('2025-03-28', '09:00:00', 'Friday', '765432198', '345678912', 15),  -- Sara Cohen with Tzipora Klein (Manicure)
('2025-03-28', '10:00:00', 'Friday', '654321987', '456789123', 20),  -- Maya Gold with Aliza Noy (Pedicure)
('2025-03-28', '11:00:00', 'Friday', '543219876', '567891234', 45),  -- Noa Katz with Hadas Shir (Anti-Aging Treatment)
('2025-03-31', '15:00:00', 'Monday', '432198765', '678912345', 20),  -- Liat Bar with Shoshana Mizrahi (Acne Treatment)
('2025-04-01', '16:00:00', 'Tuesday', '321987654', '789123456', 45),  -- Dana Sharon with Ilana Borstein (Body Scrub)
('2025-04-02', '17:00:00', 'Wednesday', '219876543', '891234567', 30),  -- Hila Malka with Rivka Elbaz (Microdermabrasion)
('2025-04-03', '18:00:00', 'Thursday', '198765432', '912345678', 30),  -- Orly Shavit with Batya Goldberg (Facial Treatment)
('2025-04-04', '19:00:00', 'Thursday', '876543210', '123456780', 30);  -- Tamar Ben Shitrit with Malka Yarden (Laser Hair Removal)