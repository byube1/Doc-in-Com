USE HowKteam
GO
SELECT GV.HOTEN, DT.TENDT FROM THAMGIADT AS TG INNER JOIN GIAOVIEN AS GV ON TG.MAGV=GV.MAGV
                              JOIN DETAI AS DT ON DT.MADT=TG.MADT

