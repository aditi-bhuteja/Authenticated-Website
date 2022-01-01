CREATE TABLE [dbo].[roleDatabase]
(
[Id] [int] NOT NULL IDENTITY(1, 1),
[PIEname] [varchar] (50) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
[SMEname] [varchar] (50) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
[ReqNumber] [varchar] (50) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
[IssueCategory] [varchar] (50) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
[ProductID] [varchar] (50) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
[Location] [varchar] (50) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
[Manufacturer] [varchar] (50) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
[Status] [varchar] (50) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
[Date_Time] [datetime] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[roleDatabase] ADD CONSTRAINT [PK_roleDatabase] PRIMARY KEY CLUSTERED ([Id]) ON [PRIMARY]
GO
