CREATE TABLE [dbo].[EmployeeLogin]
(
[Id] [int] NOT NULL IDENTITY(1, 1),
[Email] [varchar] (50) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
[Password] [varchar] (50) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
[EmployeeName] [varchar] (50) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
[EmployeeRole] [varchar] (50) COLLATE SQL_Latin1_General_CP1_CI_AS NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EmployeeLogin] ADD CONSTRAINT [PK_EmployeeLogin] PRIMARY KEY CLUSTERED ([Id]) ON [PRIMARY]
GO
