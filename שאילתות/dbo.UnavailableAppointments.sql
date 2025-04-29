CREATE TABLE [dbo].[UnavailableAppointments] (
    [Id]         INT          IDENTITY (1, 1) NOT NULL,
    [Date]       DATE         NOT NULL,
    [Hour]       TIME (7)     NOT NULL,
    [Day]        NCHAR (10)   NOT NULL,
    [EmployeeID] VARCHAR (50) NOT NULL,
    [ClientID]    VARCHAR (50) NOT NULL,
    [Duration ]  INT          NOT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_UnavailableAppointments_Employees] FOREIGN KEY ([EmployeeID]) REFERENCES [dbo].[Employees] ([Id])
);

