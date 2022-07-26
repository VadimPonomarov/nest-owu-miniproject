const doctorClinic = new Set<string>();
while (doctorClinic.size <= 20) {
    doctorClinic.add(JSON.stringify({
            doctorId: Math.floor(Math.random() * 9) + 1, clinicId: Math.floor(Math.random() * 4) + 1
        })
    );
}
export const doctorClinicData = [...doctorClinic];