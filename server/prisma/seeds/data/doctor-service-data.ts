const doctorService = new Set<string>();
while (doctorService.size <= 20) {

    doctorService.add(JSON.stringify({
            doctorId: Math.floor(Math.random() * 9) + 1, serviceId: Math.floor(Math.random() * 4) + 1
        })
    );
}
export const doctorServiceData = [...doctorService];