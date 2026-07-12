function analyzeClass(scores) {
  let xuatSac = 0;
  let gioi = 0;
  let kha = 0;
  let trungBinh = 0;
  let yeu = 0;

  let invalidCount = 0;
  let validCount = 0;

  let highest = null;
  let lowest = null;

  let sum = 0;

  for (let i = 0; i < scores.length; i++) {
    const score = scores[i];

    // Điểm không hợp lệ
    if (score < 0 || score > 10) {
      invalidCount++;
      continue;
    }

    validCount++;
    sum += score;

    if (highest === null || score > highest) {
      highest = score;
    }

    if (lowest === null || score < lowest) {
      lowest = score;
    }

    if (score >= 9) {
      xuatSac++;
    } else if (score >= 8) {
      gioi++;
    } else if (score >= 6.5) {
      kha++;
    } else if (score >= 5) {
      trungBinh++;
    } else {
      yeu++;
    }
  }

  let average = 0;

  if (validCount > 0) {
    average = sum / validCount;
    average = ((average * 100 + 0.5) | 0) / 100;
  }

  let comment = "";
  let reason = "";

if (validCount === 0) {
  comment = "Không có dữ liệu hợp lệ";
  reason = "(không có điểm hợp lệ để thống kê)";
} else {
  const khaTroLen = xuatSac + gioi + kha;

  if (khaTroLen > validCount / 2) {
    comment = "Lớp học tốt";
    reason = `(vì ${khaTroLen} trong ${validCount} học sinh đạt Khá trở lên, hơn một nửa)`;
  } else if (yeu > validCount / 2) {
    comment = "Cần cải thiện";

    if (yeu === validCount) {
      reason = "(toàn bộ học sinh đều Yếu, chắc chắn hơn một nửa)";
    } else {
      reason = `(vì ${yeu} trong ${validCount} học sinh thuộc loại Yếu, hơn một nửa)`;
    }
  } else {
    comment = "Lớp học ở mức ổn";
    reason = `(Khá trở lên: ${khaTroLen} trên ${validCount} (không quá một nửa); Yếu: ${yeu} trên ${validCount} (không quá một nửa))`;
  }
}

  console.log("Số điểm không hợp lệ:", invalidCount);
  console.log("Số học sinh hợp lệ:", validCount);
  console.log("Xuất sắc:", xuatSac);
  console.log("Giỏi:", gioi);
  console.log("Khá:", kha);
  console.log("Trung bình:", trungBinh);
  console.log("Yếu:", yeu);
  console.log("Điểm cao nhất:", highest);
  console.log("Điểm thấp nhất:", lowest);
  console.log("Điểm trung bình:", average);
  console.log("Nhận xét:", comment, reason);

  return {
    xuatSac,
    gioi,
    kha,
    trungBinh,
    yeu,
    highest,
    lowest,
    average,
    invalidCount,
    validCount,
    comment,
  };
}


// Test 1
analyzeClass([9, 7, -2, 5.5, 10, 4, 11, 6.5, 8]);

// Test 2
analyzeClass([3, 2, 4.5, 1, 0]);

// Test 3
analyzeClass([9, 1, 7, 6, 5.5]);

// Test 4
analyzeClass([-5, 15, 100, -1]);

// Test 5
analyzeClass([]);