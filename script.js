// ��������

// ���������� ��� �������� �������� ������� ������
let slideIndex = 0;

// ������ ������� showSlides ��� ��������������� ������������ �������
showSlides();

// ������� ��� ��������������� ������������ �������
function showSlides() {
    // �������� ��� �������� � ������� "mySlides" (������)
    let slides = document.getElementsByClassName("mySlides");

    // �������� ��� ������
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // ����������� ������ ������ �� 1
    slideIndex++;

    // ���� ������ ������ ��������� ���������� �������, ���������� ��� �� 1
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // ���������� ������� ����� (������ slideIndex - 1, ��� ��� ������� ���������� � 0)
    slides[slideIndex - 1].style.display = "block";

    // ������������� ������ ��� ������ ���� �� ������� ����� 5 ������ (5000 �����������)
    setTimeout(showSlides, 5000); // ������ ����� ������ 5 ������
}

// ������� ��� ������� ������������ ������� (������ ��� �����)
function plusSlides(n) {
    // �������� ������ ������ �� n (n ����� ���� ������������� ��� �������������)
    slideIndex += n;

    // �������� ��� �������� � ������� "mySlides" (������)
    let slides = document.getElementsByClassName("mySlides");

    // ���� ������ ������ ��������� ���������� �������, ���������� ��� �� 1
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // ���� ������ ������ ������ 1, ������������� ��� �� ��������� �����
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    // �������� ��� ������
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // ���������� ������� ����� (������ slideIndex - 1, ��� ��� ������� ���������� � 0)
    slides[slideIndex - 1].style.display = "block";
}