CREATE TABLE [dbo].[Clients] (
    [Id]                     VARCHAR (50) NOT NULL,
    [FirstName]              VARCHAR (50) NOT NULL,
    [LastName]               VARCHAR (50) NOT NULL,
    [PhonNumber]             VARCHAR (50) NOT NULL,
    [Email]                  VARCHAR (50) NULL,
    [City]                   VARCHAR (50) NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);

