toc.dat                                                                                             0000600 0004000 0002000 00000015115 14765001271 0014445 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        PGDMP   %    1                }            User    17.4    17.0     H           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false         I           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false         J           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false         K           1262    16384    User    DATABASE     h   CREATE DATABASE "User" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C';
    DROP DATABASE "User";
                     postgres    false                     2615    16415 	   reference    SCHEMA        CREATE SCHEMA reference;
    DROP SCHEMA reference;
                     postgres    false         �            1259    16417    program_attribute    TABLE     `   CREATE TABLE reference.program_attribute (
    id uuid,
    attribute character varying(256)
);
 (   DROP TABLE reference.program_attribute;
    	   reference         heap r       postgres    false    6         �            1259    16424    program_channel    TABLE     e   CREATE TABLE reference.program_channel (
    channel character varying(256) NOT NULL,
    id uuid
);
 &   DROP TABLE reference.program_channel;
    	   reference         heap r       postgres    false    6         �            1259    16431    program_language    TABLE        CREATE TABLE reference.program_language (
    language character varying(256) NOT NULL,
    id uuid,
    is_default boolean
);
 '   DROP TABLE reference.program_language;
    	   reference         heap r       postgres    false    6         �            1259    16438    program_measure    TABLE     j   CREATE TABLE reference.program_measure (
    measure_name character varying(256) NOT NULL,
    id uuid
);
 &   DROP TABLE reference.program_measure;
    	   reference         heap r       postgres    false    6         �            1259    16445    program_schedule_type    TABLE     �   CREATE TABLE reference.program_schedule_type (
    type character varying(256) NOT NULL,
    id uuid,
    is_default boolean
);
 ,   DROP TABLE reference.program_schedule_type;
    	   reference         heap r       postgres    false    6         �            1259    16452    program_status    TABLE     {   CREATE TABLE reference.program_status (
    status character varying(256) NOT NULL,
    id uuid,
    is_default boolean
);
 %   DROP TABLE reference.program_status;
    	   reference         heap r       postgres    false    6         �            1259    16459    program_subtype    TABLE     �   CREATE TABLE reference.program_subtype (
    program_sub_type character varying(256) NOT NULL,
    id uuid,
    program_type_id uuid
);
 &   DROP TABLE reference.program_subtype;
    	   reference         heap r       postgres    false    6         �            1259    16466    program_timeframe    TABLE     _   CREATE TABLE reference.program_timeframe (
    id uuid,
    timeframe character varying(15)
);
 (   DROP TABLE reference.program_timeframe;
    	   reference         heap r       postgres    false    6         �            1259    16473    program_timezone    TABLE     g   CREATE TABLE reference.program_timezone (
    timezone character varying(100) NOT NULL,
    id uuid
);
 '   DROP TABLE reference.program_timezone;
    	   reference         heap r       postgres    false    6         �            1259    16480    program_type    TABLE     f   CREATE TABLE reference.program_type (
    programtype character varying(100) NOT NULL,
    id uuid
);
 #   DROP TABLE reference.program_type;
    	   reference         heap r       postgres    false    6         �            1259    16487    program_week    TABLE     Z   CREATE TABLE reference.program_week (
    id uuid,
    week_day character varying(100)
);
 #   DROP TABLE reference.program_week;
    	   reference         heap r       postgres    false    6         ;          0    16417    program_attribute 
   TABLE DATA           =   COPY reference.program_attribute (id, attribute) FROM stdin;
 	   reference               postgres    false    222       3643.dat <          0    16424    program_channel 
   TABLE DATA           9   COPY reference.program_channel (channel, id) FROM stdin;
 	   reference               postgres    false    223       3644.dat =          0    16431    program_language 
   TABLE DATA           G   COPY reference.program_language (language, id, is_default) FROM stdin;
 	   reference               postgres    false    224       3645.dat >          0    16438    program_measure 
   TABLE DATA           >   COPY reference.program_measure (measure_name, id) FROM stdin;
 	   reference               postgres    false    225       3646.dat ?          0    16445    program_schedule_type 
   TABLE DATA           H   COPY reference.program_schedule_type (type, id, is_default) FROM stdin;
 	   reference               postgres    false    226       3647.dat @          0    16452    program_status 
   TABLE DATA           C   COPY reference.program_status (status, id, is_default) FROM stdin;
 	   reference               postgres    false    227       3648.dat A          0    16459    program_subtype 
   TABLE DATA           S   COPY reference.program_subtype (program_sub_type, id, program_type_id) FROM stdin;
 	   reference               postgres    false    228       3649.dat B          0    16466    program_timeframe 
   TABLE DATA           =   COPY reference.program_timeframe (id, timeframe) FROM stdin;
 	   reference               postgres    false    229       3650.dat C          0    16473    program_timezone 
   TABLE DATA           ;   COPY reference.program_timezone (timezone, id) FROM stdin;
 	   reference               postgres    false    230       3651.dat D          0    16480    program_type 
   TABLE DATA           :   COPY reference.program_type (programtype, id) FROM stdin;
 	   reference               postgres    false    231       3652.dat E          0    16487    program_week 
   TABLE DATA           7   COPY reference.program_week (id, week_day) FROM stdin;
 	   reference               postgres    false    232       3653.dat                                                                                                                                                                                                                                                                                                                                                                                                                                                   3643.dat                                                                                            0000600 0004000 0002000 00000000372 14765001271 0014256 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        11111111-1111-1111-1111-111111111111	Attribute 1
11111111-1111-1111-1111-111111111112	Attribute 2
11111111-1111-1111-1111-111111111113	Attribute 3
11111111-1111-1111-1111-111111111114	Attribute 4
11111111-1111-1111-1111-111111111115	Attribute 5
\.


                                                                                                                                                                                                                                                                      3644.dat                                                                                            0000600 0004000 0002000 00000000360 14765001271 0014254 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        Channel 1	22222222-2222-2222-2222-222222222221
Channel 2	22222222-2222-2222-2222-222222222222
Channel 3	22222222-2222-2222-2222-222222222223
Channel 4	22222222-2222-2222-2222-222222222224
Channel 5	22222222-2222-2222-2222-222222222225
\.


                                                                                                                                                                                                                                                                                3645.dat                                                                                            0000600 0004000 0002000 00000000356 14765001271 0014262 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        English	33333333-3333-3333-3333-333333333331	t
Spanish	33333333-3333-3333-3333-333333333332	f
French	33333333-3333-3333-3333-333333333333	f
German	33333333-3333-3333-3333-333333333334	f
Italian	33333333-3333-3333-3333-333333333335	f
\.


                                                                                                                                                                                                                                                                                  3646.dat                                                                                            0000600 0004000 0002000 00000000360 14765001271 0014256 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        Measure 1	44444444-4444-4444-4444-444444444441
Measure 2	44444444-4444-4444-4444-444444444442
Measure 3	44444444-4444-4444-4444-444444444443
Measure 4	44444444-4444-4444-4444-444444444444
Measure 5	44444444-4444-4444-4444-444444444445
\.


                                                                                                                                                                                                                                                                                3647.dat                                                                                            0000600 0004000 0002000 00000000356 14765001271 0014264 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        Daily	55555555-5555-5555-5555-555555555551	t
Weekly	55555555-5555-5555-5555-555555555552	f
Monthly	55555555-5555-5555-5555-555555555553	f
Quarterly	55555555-5555-5555-5555-555555555554	f
Yearly	55555555-5555-5555-5555-555555555555	f
\.


                                                                                                                                                                                                                                                                                  3648.dat                                                                                            0000600 0004000 0002000 00000000364 14765001271 0014264 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        Active	66666666-6666-6666-6666-666666666661	t
Inactive	66666666-6666-6666-6666-666666666662	f
Pending	66666666-6666-6666-6666-666666666663	f
Completed	66666666-6666-6666-6666-666666666664	f
Cancelled	66666666-6666-6666-6666-666666666665	f
\.


                                                                                                                                                                                                                                                                            3649.dat                                                                                            0000600 0004000 0002000 00000000651 14765001271 0014264 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        Subtype A	77777777-7777-7777-7777-777777777771	88888888-8888-8888-8888-888888888881
Subtype B	77777777-7777-7777-7777-777777777772	88888888-8888-8888-8888-888888888882
Subtype C	77777777-7777-7777-7777-777777777773	88888888-8888-8888-8888-888888888883
Subtype D	77777777-7777-7777-7777-777777777774	88888888-8888-8888-8888-888888888884
Subtype E	77777777-7777-7777-7777-777777777775	88888888-8888-8888-8888-888888888885
\.


                                                                                       3650.dat                                                                                            0000600 0004000 0002000 00000000346 14765001271 0014255 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        99999999-9999-9999-9999-999999999991	Q1 2025
99999999-9999-9999-9999-999999999992	Q2 2025
99999999-9999-9999-9999-999999999993	Q3 2025
99999999-9999-9999-9999-999999999994	Q4 2025
99999999-9999-9999-9999-999999999995	Q1 2026
\.


                                                                                                                                                                                                                                                                                          3651.dat                                                                                            0000600 0004000 0002000 00000000322 14765001271 0014250 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        UTC	aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaa1
PST	aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaa2
EST	aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaa3
CET	aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaa4
IST	aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaa5
\.


                                                                                                                                                                                                                                                                                                              3652.dat                                                                                            0000600 0004000 0002000 00000000341 14765001271 0014252 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        Type 1	bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb1
Type 2	bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb2
Type 3	bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb3
Type 4	bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb4
Type 5	bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb5
\.


                                                                                                                                                                                                                                                                                               3653.dat                                                                                            0000600 0004000 0002000 00000000347 14765001271 0014261 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        cccccccc-cccc-cccc-cccc-ccccccccccc1	Monday
cccccccc-cccc-cccc-cccc-ccccccccccc2	Tuesday
cccccccc-cccc-cccc-cccc-ccccccccccc3	Wednesday
cccccccc-cccc-cccc-cccc-ccccccccccc4	Thursday
cccccccc-cccc-cccc-cccc-ccccccccccc5	Friday
\.


                                                                                                                                                                                                                                                                                         restore.sql                                                                                         0000600 0004000 0002000 00000015426 14765001271 0015377 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        --
-- NOTE:
--
-- File paths need to be edited. Search for $$PATH$$ and
-- replace it with the path to the directory containing
-- the extracted data files.
--
--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE "User";
--
-- Name: User; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE "User" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C';


ALTER DATABASE "User" OWNER TO postgres;

\connect "User"

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: reference; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA reference;


ALTER SCHEMA reference OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: program_attribute; Type: TABLE; Schema: reference; Owner: postgres
--

CREATE TABLE reference.program_attribute (
    id uuid,
    attribute character varying(256)
);


ALTER TABLE reference.program_attribute OWNER TO postgres;

--
-- Name: program_channel; Type: TABLE; Schema: reference; Owner: postgres
--

CREATE TABLE reference.program_channel (
    channel character varying(256) NOT NULL,
    id uuid
);


ALTER TABLE reference.program_channel OWNER TO postgres;

--
-- Name: program_language; Type: TABLE; Schema: reference; Owner: postgres
--

CREATE TABLE reference.program_language (
    language character varying(256) NOT NULL,
    id uuid,
    is_default boolean
);


ALTER TABLE reference.program_language OWNER TO postgres;

--
-- Name: program_measure; Type: TABLE; Schema: reference; Owner: postgres
--

CREATE TABLE reference.program_measure (
    measure_name character varying(256) NOT NULL,
    id uuid
);


ALTER TABLE reference.program_measure OWNER TO postgres;

--
-- Name: program_schedule_type; Type: TABLE; Schema: reference; Owner: postgres
--

CREATE TABLE reference.program_schedule_type (
    type character varying(256) NOT NULL,
    id uuid,
    is_default boolean
);


ALTER TABLE reference.program_schedule_type OWNER TO postgres;

--
-- Name: program_status; Type: TABLE; Schema: reference; Owner: postgres
--

CREATE TABLE reference.program_status (
    status character varying(256) NOT NULL,
    id uuid,
    is_default boolean
);


ALTER TABLE reference.program_status OWNER TO postgres;

--
-- Name: program_subtype; Type: TABLE; Schema: reference; Owner: postgres
--

CREATE TABLE reference.program_subtype (
    program_sub_type character varying(256) NOT NULL,
    id uuid,
    program_type_id uuid
);


ALTER TABLE reference.program_subtype OWNER TO postgres;

--
-- Name: program_timeframe; Type: TABLE; Schema: reference; Owner: postgres
--

CREATE TABLE reference.program_timeframe (
    id uuid,
    timeframe character varying(15)
);


ALTER TABLE reference.program_timeframe OWNER TO postgres;

--
-- Name: program_timezone; Type: TABLE; Schema: reference; Owner: postgres
--

CREATE TABLE reference.program_timezone (
    timezone character varying(100) NOT NULL,
    id uuid
);


ALTER TABLE reference.program_timezone OWNER TO postgres;

--
-- Name: program_type; Type: TABLE; Schema: reference; Owner: postgres
--

CREATE TABLE reference.program_type (
    programtype character varying(100) NOT NULL,
    id uuid
);


ALTER TABLE reference.program_type OWNER TO postgres;

--
-- Name: program_week; Type: TABLE; Schema: reference; Owner: postgres
--

CREATE TABLE reference.program_week (
    id uuid,
    week_day character varying(100)
);


ALTER TABLE reference.program_week OWNER TO postgres;

--
-- Data for Name: program_attribute; Type: TABLE DATA; Schema: reference; Owner: postgres
--

COPY reference.program_attribute (id, attribute) FROM stdin;
\.
COPY reference.program_attribute (id, attribute) FROM '$$PATH$$/3643.dat';

--
-- Data for Name: program_channel; Type: TABLE DATA; Schema: reference; Owner: postgres
--

COPY reference.program_channel (channel, id) FROM stdin;
\.
COPY reference.program_channel (channel, id) FROM '$$PATH$$/3644.dat';

--
-- Data for Name: program_language; Type: TABLE DATA; Schema: reference; Owner: postgres
--

COPY reference.program_language (language, id, is_default) FROM stdin;
\.
COPY reference.program_language (language, id, is_default) FROM '$$PATH$$/3645.dat';

--
-- Data for Name: program_measure; Type: TABLE DATA; Schema: reference; Owner: postgres
--

COPY reference.program_measure (measure_name, id) FROM stdin;
\.
COPY reference.program_measure (measure_name, id) FROM '$$PATH$$/3646.dat';

--
-- Data for Name: program_schedule_type; Type: TABLE DATA; Schema: reference; Owner: postgres
--

COPY reference.program_schedule_type (type, id, is_default) FROM stdin;
\.
COPY reference.program_schedule_type (type, id, is_default) FROM '$$PATH$$/3647.dat';

--
-- Data for Name: program_status; Type: TABLE DATA; Schema: reference; Owner: postgres
--

COPY reference.program_status (status, id, is_default) FROM stdin;
\.
COPY reference.program_status (status, id, is_default) FROM '$$PATH$$/3648.dat';

--
-- Data for Name: program_subtype; Type: TABLE DATA; Schema: reference; Owner: postgres
--

COPY reference.program_subtype (program_sub_type, id, program_type_id) FROM stdin;
\.
COPY reference.program_subtype (program_sub_type, id, program_type_id) FROM '$$PATH$$/3649.dat';

--
-- Data for Name: program_timeframe; Type: TABLE DATA; Schema: reference; Owner: postgres
--

COPY reference.program_timeframe (id, timeframe) FROM stdin;
\.
COPY reference.program_timeframe (id, timeframe) FROM '$$PATH$$/3650.dat';

--
-- Data for Name: program_timezone; Type: TABLE DATA; Schema: reference; Owner: postgres
--

COPY reference.program_timezone (timezone, id) FROM stdin;
\.
COPY reference.program_timezone (timezone, id) FROM '$$PATH$$/3651.dat';

--
-- Data for Name: program_type; Type: TABLE DATA; Schema: reference; Owner: postgres
--

COPY reference.program_type (programtype, id) FROM stdin;
\.
COPY reference.program_type (programtype, id) FROM '$$PATH$$/3652.dat';

--
-- Data for Name: program_week; Type: TABLE DATA; Schema: reference; Owner: postgres
--

COPY reference.program_week (id, week_day) FROM stdin;
\.
COPY reference.program_week (id, week_day) FROM '$$PATH$$/3653.dat';

--
-- PostgreSQL database dump complete
--

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          