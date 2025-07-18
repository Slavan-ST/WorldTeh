USE [WorldTeh]
GO
/****** Object:  Table [dbo].[Employees]    Script Date: 10.07.2025 23:42:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Employees](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Department] [nvarchar](100) NOT NULL,
	[FullName] [nvarchar](100) NOT NULL,
	[BirthDate] [date] NOT NULL,
	[EmploymentDate] [date] NOT NULL,
	[Salary] [decimal](10, 2) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Employees] ON 

INSERT [dbo].[Employees] ([Id], [Department], [FullName], [BirthDate], [EmploymentDate], [Salary]) VALUES (2, N'IT', N'Петров Петр Петрович', CAST(N'1990-07-21' AS Date), CAST(N'2015-09-09' AS Date), CAST(75000.00 AS Decimal(10, 2)))
INSERT [dbo].[Employees] ([Id], [Department], [FullName], [BirthDate], [EmploymentDate], [Salary]) VALUES (3, N'HR', N'Сидорова Анна Михайловна', CAST(N'1988-11-05' AS Date), CAST(N'2012-03-15' AS Date), CAST(65000.00 AS Decimal(10, 2)))
INSERT [dbo].[Employees] ([Id], [Department], [FullName], [BirthDate], [EmploymentDate], [Salary]) VALUES (4, N'Finance', N'Кузнецова Елена Владимировна', CAST(N'1982-05-18' AS Date), CAST(N'2008-07-22' AS Date), CAST(95000.00 AS Decimal(10, 2)))
INSERT [dbo].[Employees] ([Id], [Department], [FullName], [BirthDate], [EmploymentDate], [Salary]) VALUES (5, N'Marketing', N'Смирнов Алексей Дмитриевич', CAST(N'1992-09-30' AS Date), CAST(N'2018-01-14' AS Date), CAST(60000.00 AS Decimal(10, 2)))
INSERT [dbo].[Employees] ([Id], [Department], [FullName], [BirthDate], [EmploymentDate], [Salary]) VALUES (6, N'Sales', N'Федоров Дмитрий Сергеевич', CAST(N'1987-04-25' AS Date), CAST(N'2014-11-05' AS Date), CAST(70000.00 AS Decimal(10, 2)))
INSERT [dbo].[Employees] ([Id], [Department], [FullName], [BirthDate], [EmploymentDate], [Salary]) VALUES (7, N'IT', N'Николаева Ольга Игоревна', CAST(N'1991-12-12' AS Date), CAST(N'2016-08-18' AS Date), CAST(80000.00 AS Decimal(10, 2)))
INSERT [dbo].[Employees] ([Id], [Department], [FullName], [BirthDate], [EmploymentDate], [Salary]) VALUES (8, N'Logistics', N'Волков Андрей Александрович', CAST(N'1983-08-07' AS Date), CAST(N'2011-05-29' AS Date), CAST(55000.00 AS Decimal(10, 2)))
INSERT [dbo].[Employees] ([Id], [Department], [FullName], [BirthDate], [EmploymentDate], [Salary]) VALUES (9, N'Finance', N'Козлова Татьяна Николаевна', CAST(N'1979-06-19' AS Date), CAST(N'2005-02-10' AS Date), CAST(110000.00 AS Decimal(10, 2)))
INSERT [dbo].[Employees] ([Id], [Department], [FullName], [BirthDate], [EmploymentDate], [Salary]) VALUES (10, N'HR', N'Лебедев Михаил Олегович', CAST(N'1986-01-31' AS Date), CAST(N'2013-07-23' AS Date), CAST(68000.00 AS Decimal(10, 2)))
INSERT [dbo].[Employees] ([Id], [Department], [FullName], [BirthDate], [EmploymentDate], [Salary]) VALUES (11, N'IT', N'Соколова Екатерина Павловна', CAST(N'1993-02-14' AS Date), CAST(N'2019-04-01' AS Date), CAST(72000.00 AS Decimal(10, 2)))
INSERT [dbo].[Employees] ([Id], [Department], [FullName], [BirthDate], [EmploymentDate], [Salary]) VALUES (12, N'Sales', N'Павлов Артем Викторович', CAST(N'1984-10-07' AS Date), CAST(N'2010-12-14' AS Date), CAST(78000.00 AS Decimal(10, 2)))
INSERT [dbo].[Employees] ([Id], [Department], [FullName], [BirthDate], [EmploymentDate], [Salary]) VALUES (13, N'Marketing', N'Григорьева Наталья Сергеевна', CAST(N'1989-07-03' AS Date), CAST(N'2017-03-27' AS Date), CAST(63000.00 AS Decimal(10, 2)))
INSERT [dbo].[Employees] ([Id], [Department], [FullName], [BirthDate], [EmploymentDate], [Salary]) VALUES (14, N'IT', N'Белов Алексей Игоревич', CAST(N'1981-04-17' AS Date), CAST(N'2009-09-08' AS Date), CAST(92000.00 AS Decimal(10, 2)))
INSERT [dbo].[Employees] ([Id], [Department], [FullName], [BirthDate], [EmploymentDate], [Salary]) VALUES (15, N'Finance', N'Дмитриева Ирина Васильевна', CAST(N'1978-12-22' AS Date), CAST(N'2007-06-10' AS Date), CAST(105000.00 AS Decimal(10, 2)))
INSERT [dbo].[Employees] ([Id], [Department], [FullName], [BirthDate], [EmploymentDate], [Salary]) VALUES (16, N'Logistics', N'Орлов Сергей Владимирович', CAST(N'1990-05-09' AS Date), CAST(N'2015-10-30' AS Date), CAST(58000.00 AS Decimal(10, 2)))
INSERT [dbo].[Employees] ([Id], [Department], [FullName], [BirthDate], [EmploymentDate], [Salary]) VALUES (17, N'HR', N'Антонова Марина Дмитриевна', CAST(N'1987-09-21' AS Date), CAST(N'2014-02-14' AS Date), CAST(67000.00 AS Decimal(10, 2)))
INSERT [dbo].[Employees] ([Id], [Department], [FullName], [BirthDate], [EmploymentDate], [Salary]) VALUES (18, N'IT', N'Тарасов Денис Андреевич', CAST(N'1994-03-28' AS Date), CAST(N'2020-07-19' AS Date), CAST(69000.00 AS Decimal(10, 2)))
INSERT [dbo].[Employees] ([Id], [Department], [FullName], [BirthDate], [EmploymentDate], [Salary]) VALUES (19, N'Sales', N'Филиппова Анастасия Ильинична', CAST(N'1986-11-11' AS Date), CAST(N'2012-08-22' AS Date), CAST(74000.00 AS Decimal(10, 2)))
INSERT [dbo].[Employees] ([Id], [Department], [FullName], [BirthDate], [EmploymentDate], [Salary]) VALUES (20, N'Marketing', N'Семенов Виктор Геннадьевич', CAST(N'1980-08-04' AS Date), CAST(N'2008-04-16' AS Date), CAST(88000.00 AS Decimal(10, 2)))
INSERT [dbo].[Employees] ([Id], [Department], [FullName], [BirthDate], [EmploymentDate], [Salary]) VALUES (21, N'IT', N'Макарова Юлия Олеговна', CAST(N'1989-01-26' AS Date), CAST(N'2016-05-07' AS Date), CAST(81000.00 AS Decimal(10, 2)))
INSERT [dbo].[Employees] ([Id], [Department], [FullName], [BirthDate], [EmploymentDate], [Salary]) VALUES (22, N'Finance', N'Герасимов Павел Евгеньевич', CAST(N'1977-07-13' AS Date), CAST(N'2006-01-28' AS Date), CAST(115000.00 AS Decimal(10, 2)))
INSERT [dbo].[Employees] ([Id], [Department], [FullName], [BirthDate], [EmploymentDate], [Salary]) VALUES (23, N'Logistics', N'Власова Оксана Витальевна', CAST(N'1985-02-20' AS Date), CAST(N'2013-11-09' AS Date), CAST(59000.00 AS Decimal(10, 2)))
INSERT [dbo].[Employees] ([Id], [Department], [FullName], [BirthDate], [EmploymentDate], [Salary]) VALUES (24, N'HR', N'Крылов Игорь Станиславович', CAST(N'1983-10-02' AS Date), CAST(N'2011-07-31' AS Date), CAST(71000.00 AS Decimal(10, 2)))
INSERT [dbo].[Employees] ([Id], [Department], [FullName], [BirthDate], [EmploymentDate], [Salary]) VALUES (25, N'IT', N'Савельев Антон Юрьевич', CAST(N'1992-06-15' AS Date), CAST(N'2018-09-12' AS Date), CAST(77000.00 AS Decimal(10, 2)))
INSERT [dbo].[Employees] ([Id], [Department], [FullName], [BirthDate], [EmploymentDate], [Salary]) VALUES (26, N'Sales', N'Горбунова Людмила Анатольевна', CAST(N'1988-04-28' AS Date), CAST(N'2015-03-24' AS Date), CAST(73000.00 AS Decimal(10, 2)))
INSERT [dbo].[Employees] ([Id], [Department], [FullName], [BirthDate], [EmploymentDate], [Salary]) VALUES (33, N'1212', N'1', CAST(N'2025-07-12' AS Date), CAST(N'2025-08-08' AS Date), CAST(12.00 AS Decimal(10, 2)))
SET IDENTITY_INSERT [dbo].[Employees] OFF
GO
