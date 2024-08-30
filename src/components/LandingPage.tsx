'use client';
import Image from 'next/image';

import { Button, Card, CardContent } from '@mui/material';
import {
	ChevronRightIcon,
	ClockIcon,
	ListCheck,
	MailIcon,
	RocketIcon,
	ShieldCheckIcon,
	ThumbsUp,
	TrainIcon,
	UserIcon,
	Wrench,
} from 'lucide-react';
import imgBgMetroQuito from '../../public/images/bg-metro-quito.jpg';
import imgLgSaturdays from '../../public/images/lg-saturdays.png';
import imgLgLinkedin from '../../public/images/linkedin.png';
import imgMemberSc from '../../public/images/member-sc.jpeg';
import imgUserDefault from '../../public/images/user_default.png';

import imgCamara from '../../public/images/camara.png';
import imgHowWorks from '../../public/images/howWorks.jpeg';
import imgLgOpenCv from '../../public/images/lg-opencv.png';

export default function LandingPage() {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('Form submitted');
	};

	return (
		<div className="min-h-screen bg-gray-100">
			{/* Hero Section */}
			<header className="bg-[#223e77] text-white py-20 relative overflow-hidden">
				<div className="container mx-auto text-center relative z-10">
					<TrainIcon className="h-24 w-24 mx-auto mb-6 text-[#ec253a]" />
					<h1 className="text-5xl font-bold mb-4">Metro de Quito + IA </h1>
					<p className="text-xl mb-8">
						Cómo la IA Hará del Metro de Quito un Lugar Más Seguro para Todos
					</p>
					<Button
						className="bg-[#ec253a] hover:bg-red-700 text-white"
						onClick={() =>
							window.open(
								'https://github.com/StevenCalderon/metroquito',
								'_blank'
							)
						}
					>
						Descubre Más <ChevronRightIcon className="ml-2 h-4 w-4" />
					</Button>
				</div>
				<Image
					src={imgBgMetroQuito}
					alt="Metro de Quito"
					layout="fill"
					objectFit="cover"
					className="opacity-20"
				/>
			</header>

			{/* Objectives Section */}
			<section className="py-20 bg-white">
				<div className="container mx-auto">
					<h2 className="text-4xl font-bold text-center mb-12 text-[#223e77]">
						Objetivos del MVP
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								icon: ShieldCheckIcon,
								title: 'Detección en Tiempo Real',
								description:
									'Identificar cuando un pasajero se acerca demasiado a la línea amarilla.',
							},
							{
								icon: RocketIcon,
								title: 'Prueba de Concepto',
								description:
									'Evaluar la efectividad y precisión del sistema en un entorno real.',
							},
							{
								icon: UserIcon,
								title: 'Retroalimentación',
								description:
									'Recopilar feedback del personal del metro y de los usuarios.',
							},
						].map((item, index) => (
							<Card
								key={index}
								className="border-t-4 border-[#ec253a] shadow-lg hover:shadow-xl transition-shadow duration-300"
							>
								<CardContent className="pt-6">
									<item.icon className="h-10 w-10 text-[#ec253a] mb-4" />
									<h3 className="text-xl font-semibold mb-2 text-[#223e77]">
										{item.title}
									</h3>
									<p>{item.description}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Technical Description */}
			<section className="py-20 bg-gray-100">
				<div className="container mx-auto">
					<h2 className="text-4xl font-bold text-center mb-12 text-[#223e77]">
						Descripción Técnica
					</h2>
					<div className="grid md:grid-cols-2 gap-8">
						<Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
							<CardContent className="pt-6">
								<h3 className="text-2xl font-semibold mb-4 text-[#223e77]">
									Hardware
								</h3>
								<ul className="list-disc list-inside space-y-2">
									<li>
										Cámaras de alta resolución (por ahora, se utilizarán cámaras
										de celular)
									</li>
									<li>Laptop para procesamiento inicial de datos</li>
									<li>Router o dispositivo para conexión en red</li>
								</ul>
								<Image
									src={imgCamara}
									alt="Configuración de Hardware"
									width={140}
									height={140}
									className="pt-4"
								/>
							</CardContent>
						</Card>
						<Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
							<CardContent className="pt-6">
								<h3 className="text-2xl font-semibold mb-4 text-[#223e77]">
									Software
								</h3>
								<ul className="list-disc list-inside space-y-2">
									<li>
										Modelo de visión por computadora (detección de objetos)
									</li>
									<li>Framework de video en tiempo real (OpenCV)</li>
									<li>Algoritmos para calcular distancia y activar alertas</li>
								</ul>
								<Image
									src={imgLgOpenCv}
									alt="Interfaz de Software"
									width={100}
									height={100}
									className="pt-4"
								/>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Timeline */}
			<section className="py-20 bg-white">
				<div className="container mx-auto">
					<h2 className="text-4xl font-bold text-center mb-12 text-[#223e77]">
						Cronograma del MVP
					</h2>
					<div className="space-y-8 max-w-2xl mx-auto">
						{[
							{
								phase: 'Fase 1: Planificación y Preparación',
								duration: '1-2 semanas',
								description:
									'Definición de requisitos y adquisición de hardware',
							},
							{
								phase: 'Fase 2: Desarrollo e Implementación',
								duration: '2-3 semanas',
								description:
									'Configuración del sistema y desarrollo de algoritmos',
							},
							{
								phase: 'Fase 3: Prueba y Evaluación',
								duration: '4-8 semanas',
								description: 'Pruebas en entorno real y ajustes del sistema',
							},
							{
								phase: 'Fase 4: Análisis y Reporte',
								duration: '2 semanas',
								description:
									'Evaluación de resultados y preparación de informe final',
							},
						].map((item, index) => (
							<Card
								key={index}
								className="shadow-lg hover:shadow-xl transition-shadow duration-300"
							>
								<CardContent className="pt-6 flex items-start">
									<ClockIcon className="h-8 w-8 text-[#ec253a] mr-4 flex-shrink-0" />
									<div>
										<h3 className="text-xl font-semibold text-[#223e77]">
											{item.phase}
										</h3>
										<p className="text-sm text-gray-600 mb-2">
											{item.duration}
										</p>
										<p>{item.description}</p>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Benefits */}
			<section className="py-20 bg-gray-100">
				<div className="container mx-auto">
					<h2 className="text-4xl font-bold text-center mb-12 text-[#223e77]">
						Ventajas del MVP
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								title: 'Validación Técnica',
								description:
									'Confirmar que la tecnología funciona eficazmente en un entorno real del Metro de Quito.',
								icon: <ListCheck className="h-10 w-10 text-[#ec253a] mb-4" />,
							},
							{
								title: 'Prueba de Concepto',
								description:
									'Evaluar la utilidad y aceptación del sistema antes de una inversión mayor en infraestructura.',
								icon: <ThumbsUp className="h-10 w-10 text-[#ec253a] mb-4" />,
							},
							{
								title: 'Flexibilidad',
								description:
									'Capacidad de ajustar y mejorar el sistema basado en los resultados y la retroalimentación recibida de usuarios reales.',
								icon: <Wrench className="h-10 w-10 text-[#ec253a] mb-4" />,
							},
						].map((benefit, index) => (
							<Card
								key={index}
								className="shadow-lg hover:shadow-xl transition-shadow duration-300"
							>
								<CardContent className="pt-6">
									{benefit.icon}
									<h3 className="text-xl font-semibold mb-2 text-[#223e77]">
										{benefit.title}
									</h3>
									<p>{benefit.description}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Illustration Section */}
			<section className="py-20 bg-white">
				<div className="container mx-auto">
					<h2 className="text-4xl font-bold text-center mb-12 text-[#223e77]">
						Cómo Funciona
					</h2>
					<div className="grid md:grid-cols-2 gap-8 items-center">
						<div>
							<h3 className="text-2xl font-semibold mb-4 text-[#223e77]">
								Detección y Alerta en Tiempo Real
							</h3>
							<ol className="list-decimal list-inside space-y-2">
								<li>Las cámaras capturan imágenes de la plataforma</li>
								<li>
									El sistema de IA analiza la proximidad de los pasajeros a la
									línea amarilla
								</li>
								<li>
									Si se detecta una situación de riesgo, se activa una alerta
								</li>
								<li>
									El personal de seguridad es notificado para tomar acción si es
									necesario
								</li>
							</ol>
						</div>
						<div>
							<Image
								src={imgHowWorks}
								alt="Sistema de Detección y Alerta"
								width={500}
								height={300}
								className="rounded-lg shadow-lg"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Team */}
			<section className="py-20 bg-gray-100">
				<div className="container mx-auto">
					<h2 className="text-4xl font-bold text-center mb-12 text-[#223e77]">
						Nuestro Equipo
					</h2>
					<div className="flex flex-wrap justify-center gap-8">
						{[
							{
								name: 'Steven Calderon',
								role: 'Software Developer',
								img: imgMemberSc,
								linkedin:
									'https://www.linkedin.com/in/steven-calderon-431535183/',
							},
							{
								name: 'Kevin Bastidas',
								role: 'Data Analyst',
								img: imgUserDefault,
							},
							{
								name: 'Sebastian Gallegos',
								role: 'Data Analyst',
								img: imgUserDefault,
							},
						].map((member, index) => (
							<Card
								key={index}
								className="w-64 shadow-lg hover:shadow-xl transition-shadow duration-300"
							>
								<CardContent className="pt-6 text-center">
									<Image
										src={member.img}
										alt={member.name}
										width={128}
										height={128}
										className="rounded-full mb-4 mx-auto"
									/>
									{/* Replace the above Image with actual photos of team members */}
									<h3 className="font-semibold text-lg text-[#223e77]">
										{member.name}
									</h3>
									<p className="text-sm text-gray-600">{member.role}</p>
									<div className="w-100 flex justify-center pt-1">
										<a
											href={member.linkedin}
											className="text-center"
											target="_blank"
										>
											<Image
												src={imgLgLinkedin}
												alt="logo linkeding"
												width={25}
												height={25}
												className=""
											/>
										</a>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Contact Form and Information */}
			<section className="bg-[#223e77] text-white py-12">
				<div className="container mx-auto">
					<h2 className="text-4xl font-bold text-center mb-12">Contáctanos</h2>
					<div className="grid md:grid-cols-2 gap-8 items-center">
						<div>
							<Image
								src={imgLgSaturdays}
								alt="Metro de Quito Logo"
								width={400}
								height={400}
							/>
						</div>
						<div className="space-y-6">
							<h3 className="text-2xl font-semibold mb-4">
								Información de Contacto
							</h3>

							<div className="flex items-center space-x-4">
								<MailIcon className="h-6 w-6 text-[#ec253a]" />
								<span>sdcalderonc@gmail.com</span>
							</div>
							<div className="flex items-center space-x-4">
								<MailIcon className="h-6 w-6 text-[#ec253a]" />
								<span>kevin_bastidas@gmail.com</span>
							</div>
							<div className="flex items-center space-x-4">
								<MailIcon className="h-6 w-6 text-[#ec253a]" />
								<span>seabastian_gallegos@gmail.com</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
